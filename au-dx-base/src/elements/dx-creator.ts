import { Container, Scope, Disposable, View, OverrideContext, TemplatingEngine, BindingEngine } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";
import { DxWidgetService } from "./../services/dx-widget-service";
import { DxTemplateInfo } from "./dx-template-info";
import { IDxBase } from "./dx-base";
import { IDxElement } from "./dx-element";
import { IDxOptions } from "./dx-options";
import { IDxBinding } from "./dx-binding";
import { DxOptionNamesBinding } from "./dx-option-names-binding";
import { DxOptionsBinding } from "./dx-options-binding";

export class DxCreator implements IDxBase {
  private _eventAggregator?: EventAggregator | null;
  private _templatingEngine?: TemplatingEngine | null;
  private _dxWidgetService?: DxWidgetService | null;

  private _disposables: {(): void}[] = [];
  private _bindings: IDxBinding[] = [];

  private _parentScope?: Scope | null;
  private _templateInfo?: DxTemplateInfo | null;
  private _owningView: any; //TODO replace any
  private _valueChangeByCodeCount = 0;
  private _createdViews: View[] = [];
  private _initializeOptions: IDxOptions;

  constructor(
    private _dxElement: IDxElement
  ) {
    this._eventAggregator = Container.instance.get(EventAggregator);
    this._templatingEngine = Container.instance.get(TemplatingEngine);
    this._dxWidgetService = Container.instance.get(DxWidgetService);

    this.injectLifecycle();
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
    this.renderInline();
    this.renderDxWidget();
  }
  detached() {
    this.disposeInstances();

    this._disposables.forEach(d => d());
    this._disposables = [];

    this.detachAndUnbindCreatedViews();
  }
  unbind() {
    this._parentScope = null;
    this._templateInfo = null;

    this._bindings.forEach(b => b.dispose());
    this._bindings = [];
  }

  setOption(propertyName: string, value: any): void {
    const options = {};

    if (this._dxElement.options) {
      this._dxElement.options[propertyName] = value;
    }
    if (this._dxElement.optionNames) {
      if (this._dxElement.optionNames.includes(propertyName)) {
        (<any>this._dxElement)[propertyName] = value;
      }
    }

    this.setOptions(options);
  }
  setOptions(options: IDxOptions): void {
    let hasValueProperty = false;

    for (let key of Object.getOwnPropertyNames(options)) {
      if ((key === "items" || key === "dataSource") && options[key] == void (0)) {
        options[key] = [];
      }

      if (key != "isValid") {
        const currentValue = this
        if (currentValue === options[key]) {
          delete options[key];
          continue;
        }
      }
    }

    if (Object.getOwnPropertyNames(options).length === 0) {
      return;
    }

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

  private validateActivateArguments(args: any) {
    /* when used with au-compose */
    if (!args.name) {
      return;
    }
    if (!args.options) {
      return;
    }

    this._dxElement.widgetName = args.name;
    this._dxElement.options = args.options;
    this._dxElement.validatorOptions = args.validator;
  }

  private prepareBindings() {
    this._bindings.push(new DxOptionsBinding());
    this._bindings.push(new DxOptionNamesBinding());

    this._bindings.forEach(b => b.prepare(this._dxElement, this._parentScope));
  }
  private prepareTemplates() {
    this._templateInfo = new DxTemplateInfo(
      this._templatingEngine!,
      this._owningView,
      this._parentScope!,
      this._dxElement.element
    );

    this._templateInfo.extractTemplates();
  }
  
  private renderInline() {
    const children = Array.from(this._dxElement.element.children);

    for (let child of children) {
      const view = this._templatingEngine!.enhance({
        element: <any>child,
        resources: this._owningView.resources,
        bindingContext: this._parentScope!.bindingContext,
        overrideContext: this._parentScope!.overrideContext
      });

      this._createdViews.push(view);
    }
  }
  private renderDxWidget() {
    this._initializeOptions = this.createInitializeOptions();

    this._dxElement.widgetElement = document.createElement("div");
    this.moveChildrenToWidgetElement();

    this._dxElement.element.appendChild(this._dxElement.widgetElement);

    if (!this._dxWidgetService!.exists(this._dxElement.widgetName)) {
      throw new Error(`Widget ${this._dxElement.widgetName} does not exist in dx-modules.ts`);
    }

    this.publishAttachingEvent();

    this._dxElement.instance = this._dxWidgetService!.createInstance(
      this._dxElement.widgetName,
      this._dxElement.widgetElement,
      this._initializeOptions);

    this.addValidatorToWidget();
    this.registerBindings();
    this.registerEvents();
    this.registerOptionChanged();

    this.publishAttachedEvent();
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
  private moveChildrenToWidgetElement() {
    while (this._dxElement.element.children.length > 0) {
      this._dxElement.widgetElement!.appendChild(<Node>this._dxElement.element.children.item(0));
    }
  }
  private addValidatorToWidget() {
    if (this._dxElement.validatorOptions) {
      this._dxElement.validatorInstance = this._dxWidgetService!.createInstance(
        "dxValidator",
        this._dxElement.widgetElement!,
        this._dxElement.validatorOptions);
    } else if (this._dxElement.options && this._dxElement.options!["validators"]) {
      this._dxElement.validatorInstance = this._dxWidgetService!.createInstance(
        "dxValidator",
        this._dxElement.widgetElement!, {
          validationRules: this._dxElement.options!["validators"]
        });
    }
  }
  private registerBindings() {
    const updateOptions = (optionName: string, value: any) => {
      const options = {};
      options[optionName] = value;
      options["isValid"] = true;

      this.setOptions(options);
    }

    this._bindings.forEach(b => b.registerBindings(updateOptions));
  }
  private registerEvents() {
    this._bindings.forEach(b => b.registerEvents());
  }
  private registerOptionChanged() {
    this._dxElement.instance!.on("optionChanged", (e: any) => {
      const shouldInform = e.name !== "value"
        || this.isChangeToPublish(e);

      if (!shouldInform) {
        return;
      }

      this._bindings.forEach(b => b.onOptionChanged(e.name, e.value));
      this.dispatchValueChangedByUser(e);
    });
  }
  private isChangeToPublish(e: any): boolean {
    /* Hack because of special handling in dxSelectBox/dxLookup */
    const isSelect = this._dxElement.widgetName === "dxSelectBox"
      || this._dxElement.widgetName == "dxLookup";

    if (!isSelect) {
      return true;
    }

    if (e.value != void (0) || e.previousValue != void (0)) {
      return true;
    }

    return false;
  }

  private dispatchValueChangedByUser(e) {
    if (this._valueChangeByCodeCount > 0) {
      return;
    }

    const publishValueChangedByUser = name === "value"
      && this._dxElement.options
      && this._dxElement.options.onValueChangedByUser;

    if (!publishValueChangedByUser) {
      return;
    }

    this._dxElement.options.onValueChangedByUser({
      sender: this._dxElement.instance,
      model: this._parentScope,
      optionName: e.name,
      value: e.value
    });
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

  private publishAttachingEvent() {
    this._eventAggregator!.publish("dx:attaching", {
      widget: this,
      owningView: this._owningView,
      name: this._dxElement.widgetName,
      options: this._initializeOptions
    });
  }
  private publishAttachedEvent() {
    this._eventAggregator!.publish("dx:attached", {
      widget: this,
      owningView: this._owningView,
      name: this._dxElement.widgetName,
      options: this._initializeOptions,
      element: this._dxElement.widgetElement,
      instance: this._dxElement.instance
    });
  }
}