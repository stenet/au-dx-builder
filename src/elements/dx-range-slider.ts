import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxRangeSlider implements IDx<DevExpress.ui.dxRangeSlider>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxRangeSlider;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxRangeSlider";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "disabled", "elementAttr", "end", "endName", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "isValid", "keyStep", "label", "max", "min", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onValueChanged", "readOnly", "rtlEnabled", "showRange", "start", "startName", "step", "tabIndex", "tooltip", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable end?: number;
  @bindable endName?: string;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable isValid?: boolean;
  @bindable keyStep?: number;
  @bindable label?: any;
  @bindable max?: number;
  @bindable min?: number;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showRange?: boolean;
  @bindable start?: number;
  @bindable startName?: string;
  @bindable step?: number;
  @bindable tabIndex?: number;
  @bindable tooltip?: any;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: number[];
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
