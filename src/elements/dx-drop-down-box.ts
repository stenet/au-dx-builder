import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDropDownBox implements IDx<DevExpress.ui.dxDropDownBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxDropDownBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDropDownBox";
  optionNames: string[] = ["acceptCustomValue", "accessKey", "activeStateEnabled", "buttons", "contentTemplate", "dataSource", "deferRendering", "disabled", "displayExpr", "displayValueFormatter", "dropDownButtonTemplate", "dropDownOptions", "elementAttr", "fieldTemplate", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "isValid", "items", "maxLength", "name", "onChange", "onClosed", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onOpened", "onOptionChanged", "onPaste", "onValueChanged", "opened", "openOnFieldClick", "placeholder", "readOnly", "rtlEnabled", "showClearButton", "showDropDownButton", "stylingMode", "tabIndex", "text", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "valueChangeEvent", "valueExpr", "visible", "width"];

  @bindable acceptCustomValue?: boolean;
  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable buttons?: string[] | DevExpress.ui.dxTextEditorButton[];
  @bindable contentTemplate?: any;
  @bindable dataSource?: any[];
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable displayExpr?: Function | string;
  @bindable displayValueFormatter?: Function;
  @bindable dropDownButtonTemplate?: any;
  @bindable dropDownOptions?: DevExpress.ui.dxPopupOptions;
  @bindable elementAttr?: any;
  @bindable fieldTemplate?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable isValid?: boolean;
  @bindable items?: any[];
  @bindable maxLength?: number | string;
  @bindable name?: string;
  @bindable opened?: boolean;
  @bindable openOnFieldClick?: boolean;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showClearButton?: boolean;
  @bindable showDropDownButton?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: any;
  @bindable valueChangeEvent?: string;
  @bindable valueExpr?: Function | string;
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
