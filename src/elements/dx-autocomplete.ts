import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxAutocomplete implements IDx<DevExpress.ui.dxAutocomplete>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxAutocomplete;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxAutocomplete";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "buttons", "dataSource", "deferRendering", "disabled", "displayValue", "dropDownButtonTemplate", "dropDownOptions", "elementAttr", "focusStateEnabled", "grouped", "groupTemplate", "height", "hint", "hoverStateEnabled", "inputAttr", "isValid", "items", "itemTemplate", "maxItemCount", "maxLength", "minSearchLength", "name", "onChange", "onClosed", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onItemClick", "onKeyDown", "onKeyPress", "onKeyUp", "onOpened", "onOptionChanged", "onPaste", "onSelectionChanged", "onValueChanged", "opened", "openOnFieldClick", "placeholder", "readOnly", "rtlEnabled", "searchExpr", "searchMode", "searchTimeout", "selectedItem", "showClearButton", "showDropDownButton", "spellcheck", "stylingMode", "tabIndex", "text", "useItemTextAsTitle", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "valueChangeEvent", "valueExpr", "visible", "width", "wrapItemText"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable buttons?: string[] | DevExpress.ui.dxTextEditorButton[];
  @bindable dataSource?: DevExpress.ui.CollectionWidgetItem[] | any[];
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable displayValue?: string;
  @bindable dropDownButtonTemplate?: any;
  @bindable dropDownOptions?: DevExpress.ui.dxPopupOptions;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable grouped?: boolean;
  @bindable groupTemplate?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable isValid?: boolean;
  @bindable items?: any[];
  @bindable itemTemplate?: any;
  @bindable maxItemCount?: number;
  @bindable maxLength?: number | string;
  @bindable minSearchLength?: number;
  @bindable name?: string;
  @bindable opened?: boolean;
  @bindable openOnFieldClick?: boolean;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable searchExpr?: Function[] | string[];
  @bindable searchMode?: string;
  @bindable searchTimeout?: number;
  @bindable selectedItem?: any;
  @bindable showClearButton?: boolean;
  @bindable showDropDownButton?: boolean;
  @bindable spellcheck?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable useItemTextAsTitle?: boolean;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: string;
  @bindable valueChangeEvent?: string;
  @bindable valueExpr?: Function | string;
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
  @bindable wrapItemText?: boolean;
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
