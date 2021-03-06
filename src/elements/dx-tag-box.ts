import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTagBox implements IDx<DevExpress.ui.dxTagBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxTagBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTagBox";
  optionNames: string[] = ["acceptCustomValue", "accessKey", "activeStateEnabled", "applyValueMode", "buttons", "dataSource", "deferRendering", "disabled", "displayExpr", "dropDownButtonTemplate", "dropDownOptions", "elementAttr", "fieldTemplate", "focusStateEnabled", "grouped", "groupTemplate", "height", "hideSelectedItems", "hint", "hoverStateEnabled", "inputAttr", "isValid", "items", "itemTemplate", "maxDisplayedTags", "maxFilterQueryLength", "maxLength", "minSearchLength", "multiline", "name", "noDataText", "onChange", "onClosed", "onContentReady", "onCustomItemCreating", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onItemClick", "onKeyDown", "onKeyPress", "onKeyUp", "onMultiTagPreparing", "onOpened", "onOptionChanged", "onSelectAllValueChanged", "onSelectionChanged", "onValueChanged", "opened", "openOnFieldClick", "placeholder", "readOnly", "rtlEnabled", "searchEnabled", "searchExpr", "searchMode", "searchTimeout", "selectAllMode", "selectedItems", "showClearButton", "showDataBeforeSearch", "showDropDownButton", "showMultiTagOnly", "showSelectionControls", "stylingMode", "tabIndex", "tagTemplate", "text", "useItemTextAsTitle", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "valueExpr", "visible", "width", "wrapItemText"];

  @bindable acceptCustomValue?: boolean;
  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable applyValueMode?: string;
  @bindable buttons?: string[] | DevExpress.ui.dxTextEditorButton[];
  @bindable dataSource?: DevExpress.ui.CollectionWidgetItem[] | any[];
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable displayExpr?: Function | string;
  @bindable dropDownButtonTemplate?: any;
  @bindable dropDownOptions?: DevExpress.ui.dxPopupOptions;
  @bindable elementAttr?: any;
  @bindable fieldTemplate?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable grouped?: boolean;
  @bindable groupTemplate?: any;
  @bindable height?: number | Function | string;
  @bindable hideSelectedItems?: boolean;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable isValid?: boolean;
  @bindable items?: any[];
  @bindable itemTemplate?: any;
  @bindable maxDisplayedTags?: number;
  @bindable maxFilterQueryLength?: number;
  @bindable maxLength?: number | string;
  @bindable minSearchLength?: number;
  @bindable multiline?: boolean;
  @bindable name?: string;
  @bindable noDataText?: string;
  @bindable opened?: boolean;
  @bindable openOnFieldClick?: boolean;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable searchEnabled?: boolean;
  @bindable searchExpr?: Function[] | string[];
  @bindable searchMode?: string;
  @bindable searchTimeout?: number;
  @bindable selectAllMode?: string;
  @bindable selectedItems?: string[] | number[] | any[];
  @bindable showClearButton?: boolean;
  @bindable showDataBeforeSearch?: boolean;
  @bindable showDropDownButton?: boolean;
  @bindable showMultiTagOnly?: boolean;
  @bindable showSelectionControls?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable tagTemplate?: any;
  @bindable text?: string;
  @bindable useItemTextAsTitle?: boolean;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: string[] | number[] | any[];
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
