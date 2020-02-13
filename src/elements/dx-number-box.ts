import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxNumberBox implements IDx<DevExpress.ui.dxNumberBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxNumberBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxNumberBox";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "buttons", "disabled", "elementAttr", "focusStateEnabled", "format", "height", "hint", "hoverStateEnabled", "inputAttr", "invalidValueMessage", "isValid", "max", "min", "mode", "name", "onChange", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onOptionChanged", "onPaste", "onValueChanged", "placeholder", "readOnly", "rtlEnabled", "showClearButton", "showSpinButtons", "step", "stylingMode", "tabIndex", "text", "useLargeSpinButtons", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "valueChangeEvent", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable buttons?: string[] | DevExpress.ui.dxTextEditorButton[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable format?: DevExpress.ui.format | string;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable invalidValueMessage?: string;
  @bindable isValid?: boolean;
  @bindable max?: number;
  @bindable min?: number;
  @bindable mode?: string;
  @bindable name?: string;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showClearButton?: boolean;
  @bindable showSpinButtons?: boolean;
  @bindable step?: number;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable useLargeSpinButtons?: boolean;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: number;
  @bindable valueChangeEvent?: string;
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