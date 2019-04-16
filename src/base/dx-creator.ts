import { Container, Scope, View, OverrideContext, TemplatingEngine, TaskQueue } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { DxWidgetService } from "./../services/dx-widget-service";
import { DxTemplateInfo } from "./dx-template-info";
import { IDxBase } from "./dx-base";
import { IDxElement } from "./dx-element";
import { IDxOptions } from "./dx-options";
import { IDxBinding } from "./dx-binding";
import { DxOptionNamesBinding } from "./dx-option-names-binding";
import { DxOptionsBinding } from "./dx-options-binding";
import { DxValidation } from "./dx-validation";

export class DxCreator implements IDxBase {
  private _eventAggregator?: EventAggregator | null;
  private _templatingEngine?: TemplatingEngine | null;
  private _taskQueue?: TaskQueue | null;

  private _dxValidation: DxValidation | null;
  private _disposables: {(): void}[] = [];
  private _bindings: IDxBinding[] = [];

  private _parentScope?: Scope | null;
  private _templateInfo?: DxTemplateInfo | null;
  private _owningView: any; //TODO replace any
  private _valueChangeByCodeCount = 0;
  private _createdViews: View[] = [];

  private _children: ChildNode[] = [];

  constructor(
    private _dxElement: IDxElement
  ) {
    this._eventAggregator = Container.instance.get(EventAggregator);
    this._templatingEngine = Container.instance.get(TemplatingEngine);
    this._taskQueue = Container.instance.get(TaskQueue);

    this.injectLifecycle();
    this.extractChildNodes();
  }

  static get ATTACHING_EVENT_NAME() {
    return "dx:attaching";
  }
  static get ATTACHED_EVENT_NAME() {
    return "dx:attached";
  }

  created(owningView: any) {
    this._owningView = owningView;
  }
  activated(args: any) {
    this.validateActivateArguments(args);
  }
  bind(bindingContext: any, overrideContext: OverrideContext) {
    this._parentScope = {
      bindingContext,
      overrideContext
    };

    this.prepareBindings();
    this.prepareTemplates();
  }
  attached() {
    this.renderDxWidget();
  }
  detached() {
    this.disposeInstances();

    this._disposables.forEach(d => d());
    this._disposables = [];

    this._dxValidation.dispose();
    this._dxValidation = null;

    this.detachAndUnbindCreatedViews();
  }
  unbind() {
    this._parentScope = null;
    this._templateInfo = null;

    this._bindings.forEach(b => b.dispose());
    this._bindings = [];
  }

  getOption(optionName: string): any {
    return this._dxElement.instance!.option(optionName);
  }
  setOption(optionName: string, value: any): void {
    const options: any = {};
    options[optionName] = value;

    this.setOptions(options);
  }
  setOptions(options: {[key: string]: any}): void {
    this.prepareOptionsBeforeSet(options);
    
    const propertyNames = Object.getOwnPropertyNames(options);
    if (propertyNames.length === 0) {
      return;
    }

    const hasValueProperty = propertyNames.includes("value");

    try {
      if (hasValueProperty) {
        this._valueChangeByCodeCount++;
      }

      this._dxElement.instance!.option(options);
    } finally {
      if (hasValueProperty) {
        this._valueChangeByCodeCount--;
      }
    }
  }

  resetValidation(): void {
    if (this._dxElement.instance!.option("isValid") !== false) {
      return;
    }

    this.setOption("isValid", true);
  }
  validate(): void {
    if (!this._dxElement.validatorInstance) {
      return;
    }

    this._dxElement.validatorInstance.validate();
  }

  private injectLifecycle() {
    this._dxElement.created = this.created.bind(this);
    this._dxElement.activated = this.activated.bind(this);
    this._dxElement.bind = this.bind.bind(this);
    this._dxElement.attached = this.attached.bind(this);
    this._dxElement.detached = this.detached.bind(this);
    this._dxElement.unbind = this.unbind.bind(this);
  }
  private extractChildNodes() {
    const childNodes = Array.from(this._dxElement.element.childNodes);
    for (let child of childNodes) {
      //keep dx-templates
      if (child.nodeType === 1) {
        const childElement = <HTMLElement>child;
        if (childElement.tagName == "DX-TEMPLATE") {
          continue;
        }
      }

      this._children.push(child);
      child.parentNode.removeChild(child);
    }
  }

  private validateActivateArguments(args: any) {
    /* when used with au-compose */
    if (!args.name) {
      return;
    }
    if (!args.options) {
      return;
    }

    this._dxElement.widgetName = args.name;
    this._dxElement.widgetOptions = args.options;
    this._dxElement.validatorOptions = args.validator;
  }

  private prepareBindings() {
    this._bindings.push(new DxOptionsBinding());
    this._bindings.push(new DxOptionNamesBinding());

    this._bindings.forEach(b => b.prepare(this._dxElement, this._parentScope!));
  }
  private prepareTemplates() {
    this._templateInfo = new DxTemplateInfo(
      this._owningView,
      this._parentScope!,
      this._dxElement.element,
      (templateName, element) => {
        this._bindings.forEach(b => b.onTemplateRendered(templateName, element));
      }
    );

    this._templateInfo.extractTemplates();
  }
  
  private renderDxWidget() {
    const initializeOptions = this.createInitializeOptions();

    this._dxElement.widgetElement = document.createElement("div");
    this.renderInline();

    this._dxElement.element.appendChild(this._dxElement.widgetElement);

    const dxWidgetService = Container.instance.get(DxWidgetService);
    if (!dxWidgetService.exists(this._dxElement.widgetName)) {
      throw new Error(`Widget ${this._dxElement.widgetName} does not exist in dx-modules.ts`);
    }

    const attachingArgs = this.publishAttachingEvent(initializeOptions);

    this._dxElement.instance = dxWidgetService.createInstance(
      attachingArgs.name,
      attachingArgs.element,
      initializeOptions);

    this.addValidatorToWidget();
    this.registerBindings();
    this.registerOptionChanged();

    this.publishAttachedEvent(initializeOptions);
  }
  private createInitializeOptions() {
    const options: IDxOptions = {};

    this._bindings.forEach(b => b.updateInitializeOptions(options));

    options.modelByElement = () => this._parentScope!;
    options.integrationOptions = {
      templates: this._templateInfo!.templateDic
    }

    return options;
  }
  private renderInline() {
    if (this._children.length === 0) {
      return;
    }

    const widgetElement = this._dxElement.widgetElement;
    
    const content = document.createElement("dx-inline-content");
    for (let child of this._children) {
      content.appendChild(child.cloneNode(true));
    }

    widgetElement.appendChild(content);

    const view = this._templatingEngine!.enhance({
      element: content,
      resources: this._owningView.resources,
      bindingContext: this._parentScope!.bindingContext,
      overrideContext: this._parentScope!.overrideContext
    });

    this._createdViews.push(view);
  }
  private addValidatorToWidget() {
    this._dxValidation = new DxValidation();
    this._dxValidation.attachValidation(this._dxElement);
  }
  private registerBindings() {
    this._bindings.forEach(b => b.registerBindings(this.setOption.bind(this)));
  }
  private registerOptionChanged() {
    this._dxElement.instance!.on("optionChanged", (e: any) => {
      const shouldInform = e.fullName !== "value"
        || this.isChangeToPublish(e);

      if (!shouldInform) {
        return;
      }

      this._bindings.forEach(b => b.onOptionChanged(e.fullName, e.value));

      //do afterwoods because binding still in progress
      this._taskQueue.queueMicroTask(() => {
        this.dispatchValueChangedByUser(e);
      })
    });
  }
  private isChangeToPublish(e: any): boolean {
    /* Hack because of special handling in dxSelectBox/dxLookup */
    const isSelect = this._dxElement.widgetName === "dxSelectBox"
      || this._dxElement.widgetName === "dxLookup";

    if (!isSelect) {
      return true;
    }

    if (e.value != void (0) || e.previousValue != void (0)) {
      return true;
    }

    return false;
  }

  private prepareOptionsBeforeSet(options: {[key: string]: any}) {
    for (let optionName of Object.getOwnPropertyNames(options)) {
      const hasDataSourceWithNullValue = (["items", "dataSource"].includes(optionName))
        && options[optionName] === void(0);

      if (hasDataSourceWithNullValue) {
        options[optionName] = [];
      }

      if (optionName != "isValid") {
        const currentValue = this.getOption(optionName);
        if (currentValue === options[optionName]) {
          delete options[optionName];
          continue;
        }
      }
    }
  }
  private dispatchValueChangedByUser(e: any) {
    if (this._valueChangeByCodeCount > 0) {
      return;
    }

    const publishValueChangedByUser = e.fullName === "value";

    if (!publishValueChangedByUser) {
      return;
    }

    const args = {
      sender: this._dxElement.instance!,
      model: this._parentScope!,
      optionName: e.fullName,
      value: e.value
    };

    const hasOption = this._dxElement.widgetOptions
      && this._dxElement.widgetOptions.onValueChangedByUser;

    if (hasOption) {
      this._dxElement.widgetOptions.onValueChangedByUser(args);
    }

    this._dxElement.element.dispatchEvent(new CustomEvent(
      "on-value-changed-by-user", {
        bubbles: true,
        detail: args
      }));
  }

  private disposeInstances() {
    const removeElements: Element[] = [];

    if (this._dxElement.instance) {
      const instanceElement = this._dxElement.instance.element();
      this._dxElement.instance.dispose();
      this._dxElement.instance = null;

      removeElements.push(instanceElement);
    }

    if (this._dxElement.validatorInstance) {
      this._dxElement.validatorInstance.dispose();
      this._dxElement.validatorInstance = null;
    }

    removeElements.forEach(e => this._dxElement.element.removeChild(e));
  }
  private detachAndUnbindCreatedViews() {
    this._createdViews.forEach(c => {
      c.detached();
      c.unbind();
    });

    this._createdViews = [];
  }

  private publishAttachingEvent(initializeOptions: IDxOptions): IAttachingEvent {
    const args: IAttachingEvent = {
      element: this._dxElement.widgetElement,
      widget: this._dxElement,
      owningView: this._owningView,
      name: this._dxElement.widgetName,
      options: initializeOptions
    };

    this._eventAggregator!.publish(DxCreator.ATTACHING_EVENT_NAME, args);

    return args;
  }
  private publishAttachedEvent(initializeOptions: IDxOptions): IAttachedEvent {
    const args: IAttachedEvent = {
      element: this._dxElement.widgetElement,
      widget: this._dxElement,
      owningView: this._owningView,
      name: this._dxElement.widgetName,
      options: initializeOptions,
      instance: this._dxElement.instance
    };

    this._eventAggregator!.publish(DxCreator.ATTACHED_EVENT_NAME, args);

    return args;
  }
}

export interface IAttachingEvent {
  element: Element;
  widget: IDxElement,
  owningView: View;
  name: string;
  options: IDxOptions;
}
export interface IAttachedEvent {
  element: Element;
  widget: IDxElement,
  owningView: View;
  name: string;
  options: IDxOptions;
  instance: DevExpress.DOMComponent;
}