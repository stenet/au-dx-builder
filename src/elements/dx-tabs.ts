import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTabs implements IDx<DevExpress.ui.dxTabs>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxTabs;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTabs";
  optionNames: string[] = ["accessKey", "dataSource", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "itemHoldTimeout", "items", "itemTemplate", "keyExpr", "noDataText", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onOptionChanged", "onSelectionChanged", "repaintChangesOnly", "rtlEnabled", "scrollByContent", "scrollingEnabled", "selectedIndex", "selectedItem", "selectedItemKeys", "selectedItems", "selectionMode", "showNavButtons", "tabIndex", "visible", "width"];

  @bindable accessKey?: string;
  @bindable dataSource?: string[] | DevExpress.ui.dxTabsItem[] | any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable keyExpr?: Function | string;
  @bindable noDataText?: string;
  @bindable repaintChangesOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable scrollByContent?: boolean;
  @bindable scrollingEnabled?: boolean;
  @bindable selectedIndex?: number;
  @bindable selectedItem?: any;
  @bindable selectedItemKeys?: any[];
  @bindable selectedItems?: string[] | number[] | any[];
  @bindable selectionMode?: string;
  @bindable showNavButtons?: boolean;
  @bindable tabIndex?: number;
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
