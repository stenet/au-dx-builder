import { Container, BindingEngine, Expression } from "aurelia-framework";
import { IDxBinding } from "./dx-binding";
import { DxUtilsService } from "../services/dx-utils-service";
import { IDxElement } from "./dx-element";
import { IDxOptions } from "./dx-options";

export class DxOptionNamesBinding implements IDxBinding {
  private _dxElement: IDxElement;
  private _bindingEngine: BindingEngine;
  private _dxUtilsService: DxUtilsService;
  private _optionInfos: IOptionInfo[] = [];
  private _disposables: {(): void}[] = [];
  private _attributes: string[];
  
  prepare(dxElement: IDxElement): void {
    this._dxElement = dxElement;

    if (!dxElement.optionNames) {
      return;
    }

    this._bindingEngine = Container.instance.get(BindingEngine);
    this._dxUtilsService = Container.instance.get(DxUtilsService);

    this._attributes = dxElement.element.getAttributeNames();
    for (let optionName of dxElement.optionNames) {
      const dashCase = this._dxUtilsService.convertToDashCase(optionName);

      const exists = this._attributes.some(a => 
        a === dashCase 
        || a.startsWith(dashCase.concat(".")));

      if (!exists) {
        continue;
      }

      const bindingExpression = this._bindingEngine.parseExpression(optionName);

      this._optionInfos.push({
        camelCase: optionName,
        dashCase: dashCase,
        bindingExpression: bindingExpression
      });
    }
  }

  updateInitializeOptions(dxOptions: IDxOptions) {
    for (let optionInfo of this._optionInfos) {
      dxOptions[optionInfo.camelCase] = optionInfo
        .bindingExpression
        .evaluate({
          bindingContext: this._dxElement,
          overrideContext: null
        });
    }
  }
  registerBindings(onOptionChanged: {(optionName: string, value: any)}): void {
    for (let optionInfo of this._optionInfos) {
      const subscription = this._bindingEngine.propertyObserver(
        this._dxElement,
        optionInfo.camelCase
      ).subscribe((newVal) => {
        onOptionChanged(optionInfo.camelCase, newVal);
      });

      this._disposables.push(subscription.dispose);
    }
  }
  registerEvents() {
    for (let optionInfo of this._optionInfos) {
      if (!this.isEventOption(optionInfo.camelCase)) {
        continue;
      }

      const registerOptionName = optionInfo.camelCase
        .substr(2, 1)
        .toLowerCase()
        .concat(optionInfo.camelCase.substr(3));

      this._dxElement.instance!.on(registerOptionName, (e: any) => {
        this._dxElement.element.dispatchEvent(new CustomEvent(
          optionInfo.dashCase, {
            bubbles: true,
            detail: e
          }
        ));
      });
    }
  }

  onOptionChanged(optionName: string, value: any) {
    const optionInfo = this._optionInfos.find(o => o.camelCase === optionName);
    if (!optionInfo) {
      return;
    }

    const currValue = this._dxElement[optionName];
    if (currValue === value) {
      return;
    }

    this._dxElement[optionName] = value;
  }
  onTemplateRendered(templateName: string, element: Element): void {
    const onRenderedName = "on"
      .concat(this._dxUtilsService.convertToPascalCase(templateName))
      .concat("Rendered");

    const eventName = this._dxUtilsService.convertToDashCase(onRenderedName);

    const exists = this._attributes.some(a => 
        a === eventName 
        || a.startsWith(eventName.concat(".")));

    if (!exists) {
      return;
    }

    this._dxElement.element.dispatchEvent(new CustomEvent(
      eventName, {
        bubbles: true,
        detail: {
          widget: this._dxElement,
          templateName: templateName,
          element: element
        }
      }
    ));
  }

  dispose() {
    this._dxElement = null;

    this._disposables.forEach(d => d());
    this._disposables = [];
  }

  private isEventOption(optionName: string): boolean {
    return optionName.length > 2
      && optionName.startsWith("on")
      && optionName.substr(2, 1) === optionName.substr(2, 1).toUpperCase();
  }
}

interface IOptionInfo {
  camelCase: string;
  dashCase: string;
  bindingExpression: Expression;
}