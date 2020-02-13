import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxColorBox implements IDx<DevExpress.ui.dxColorBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxColorBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxColorBox";
  optionNames: string[] = ["acceptCustomValue", "accessKey", "activeStateEnabled", "applyButtonText", "applyValueMode", "buttons", "cancelButtonText", "deferRendering", "disabled", "dropDownButtonTemplate", "editAlphaChannel", "elementAttr", "fieldTemplate", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "isValid", "keyStep", "name", "onChange", "onClosed", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onOpened", "onOptionChanged", "onPaste", "onValueChanged", "opened", "placeholder", "readOnly", "rtlEnabled", "showClearButton", "stylingMode", "tabIndex", "text", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "visible", "width"];

  @bindable acceptCustomValue?: boolean;
  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable applyButtonText?: string;
  @bindable applyValueMode?: string;
  @bindable buttons?: string[] | DevExpress.ui.dxTextEditorButton[];
  @bindable cancelButtonText?: string;
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable dropDownButtonTemplate?: any;
  @bindable editAlphaChannel?: boolean;
  @bindable elementAttr?: any;
  @bindable fieldTemplate?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable isValid?: boolean;
  @bindable keyStep?: number;
  @bindable name?: string;
  @bindable opened?: boolean;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showClearButton?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: string;
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