import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTextArea implements IDx<DevExpress.ui.dxTextArea>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxTextArea;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTextArea";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "autoResizeEnabled", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "isValid", "maxHeight", "maxLength", "minHeight", "name", "onChange", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onOptionChanged", "onPaste", "onValueChanged", "placeholder", "readOnly", "rtlEnabled", "spellcheck", "stylingMode", "tabIndex", "text", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "valueChangeEvent", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable autoResizeEnabled?: boolean;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable isValid?: boolean;
  @bindable maxHeight?: number | string;
  @bindable maxLength?: number | string;
  @bindable minHeight?: number | string;
  @bindable name?: string;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable spellcheck?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
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