import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxList implements IDx<DevExpress.ui.dxList>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxList;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxList";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowItemDeleting", "bounceEnabled", "collapsibleGroups", "dataSource", "disabled", "displayExpr", "elementAttr", "focusStateEnabled", "grouped", "groupTemplate", "height", "hint", "hoverStateEnabled", "indicateLoading", "itemDeleteMode", "itemDragging", "itemHoldTimeout", "items", "itemTemplate", "keyExpr", "menuItems", "menuMode", "nextButtonText", "noDataText", "onContentReady", "onDisposing", "onGroupRendered", "onInitialized", "onItemClick", "onItemContextMenu", "onItemDeleted", "onItemDeleting", "onItemHold", "onItemRendered", "onItemReordered", "onItemSwipe", "onOptionChanged", "onPageLoading", "onPullRefresh", "onScroll", "onSelectAllValueChanged", "onSelectionChanged", "pageLoadingText", "pageLoadMode", "pulledDownText", "pullingDownText", "pullRefreshEnabled", "refreshingText", "repaintChangesOnly", "rtlEnabled", "scrollByContent", "scrollByThumb", "scrollingEnabled", "searchEditorOptions", "searchEnabled", "searchExpr", "searchMode", "searchTimeout", "searchValue", "selectAllMode", "selectedItemKeys", "selectedItems", "selectionMode", "showScrollbar", "showSelectionControls", "tabIndex", "useNativeScrolling", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowItemDeleting?: boolean;
  @bindable bounceEnabled?: boolean;
  @bindable collapsibleGroups?: boolean;
  @bindable dataSource?: string[] | DevExpress.ui.dxListItem[] | any[];
  @bindable disabled?: boolean;
  @bindable displayExpr?: Function | string;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable grouped?: boolean;
  @bindable groupTemplate?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable indicateLoading?: boolean;
  @bindable itemDeleteMode?: string;
  @bindable itemDragging?: DevExpress.ui.dxSortableOptions;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable keyExpr?: Function | string;
  @bindable menuItems?: any[];
  @bindable menuMode?: string;
  @bindable nextButtonText?: string;
  @bindable noDataText?: string;
  @bindable pageLoadingText?: string;
  @bindable pageLoadMode?: string;
  @bindable pulledDownText?: string;
  @bindable pullingDownText?: string;
  @bindable pullRefreshEnabled?: boolean;
  @bindable refreshingText?: string;
  @bindable repaintChangesOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable scrollByContent?: boolean;
  @bindable scrollByThumb?: boolean;
  @bindable scrollingEnabled?: boolean;
  @bindable searchEditorOptions?: DevExpress.ui.dxTextBoxOptions;
  @bindable searchEnabled?: boolean;
  @bindable searchExpr?: Function[] | string[];
  @bindable searchMode?: string;
  @bindable searchTimeout?: number;
  @bindable searchValue?: string;
  @bindable selectAllMode?: string;
  @bindable selectedItemKeys?: any[];
  @bindable selectedItems?: any[];
  @bindable selectionMode?: string;
  @bindable showScrollbar?: string;
  @bindable showSelectionControls?: boolean;
  @bindable tabIndex?: number;
  @bindable useNativeScrolling?: boolean;
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