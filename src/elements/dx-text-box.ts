import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTextBox implements IDx<DevExpress.ui.dxTextBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxTextBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTextBox";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "buttons", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "isValid", "mask", "maskChar", "maskInvalidMessage", "maskRules", "maxLength", "mode", "name", "onChange", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onOptionChanged", "onPaste", "onValueChanged", "placeholder", "readOnly", "rtlEnabled", "showClearButton", "showMaskMode", "spellcheck", "stylingMode", "tabIndex", "text", "useMaskedValue", "validationError", "validationMessageMode", "value", "valueChangeEvent", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable buttons?: string[] | DevExpress.ui.dxTextEditorButton[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable isValid?: boolean;
  @bindable mask?: string;
  @bindable maskChar?: string;
  @bindable maskInvalidMessage?: string;
  @bindable maskRules?: any;
  @bindable maxLength?: number | string;
  @bindable mode?: string;
  @bindable name?: string;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showClearButton?: boolean;
  @bindable showMaskMode?: string;
  @bindable spellcheck?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable useMaskedValue?: boolean;
  @bindable validationError?: any;
  @bindable validationMessageMode?: string;
  @bindable value?: string;
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