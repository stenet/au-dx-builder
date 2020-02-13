import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxProgressBar implements IDx<DevExpress.ui.dxProgressBar>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxProgressBar;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxProgressBar";
  optionNames: string[] = ["disabled", "elementAttr", "height", "hint", "hoverStateEnabled", "isValid", "max", "min", "onComplete", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onValueChanged", "readOnly", "rtlEnabled", "showStatus", "statusFormat", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "visible", "width"];

  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable isValid?: boolean;
  @bindable max?: number;
  @bindable min?: number;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showStatus?: boolean;
  @bindable statusFormat?: Function | string;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: number;
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
  @bindable validationRules?: any[];

  created() {}
  activate() {}
  bind() {}
  attached() {}
  detached() {}
  unbind() {}

  getOption(optionName: string): any {
    return this._creator.getOption(optionName);
  }
  setOption(optionName: string, value: any): void {
    this._creator.setOption(optionName, value);
  }
  setOptions(options: {[key: string]: any}): void {
    this._creator.setOptions(options);
  }
  resetValidation(): void {
    this._creator.resetValidation();
  }
  validate(): void {
    this._creator.validate();
  }
}