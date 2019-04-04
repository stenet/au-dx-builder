import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTreeView implements IDx<DevExpress.ui.dxTreeView>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxTreeView;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTreeView";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "animationEnabled", "createChildren", "dataSource", "dataStructure", "disabled", "disabledExpr", "displayExpr", "elementAttr", "expandAllEnabled", "expandedExpr", "expandEvent", "expandNodesRecursive", "focusStateEnabled", "hasItemsExpr", "height", "hint", "hoverStateEnabled", "itemHoldTimeout", "items", "itemsExpr", "itemTemplate", "keyExpr", "noDataText", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemCollapsed", "onItemContextMenu", "onItemExpanded", "onItemHold", "onItemRendered", "onItemSelectionChanged", "onOptionChanged", "onSelectAllValueChanged", "onSelectionChanged", "parentIdExpr", "rootValue", "rtlEnabled", "scrollDirection", "searchEditorOptions", "searchEnabled", "searchExpr", "searchMode", "searchTimeout", "searchValue", "selectAllText", "selectByClick", "selectedExpr", "selectionMode", "selectNodesRecursive", "showCheckBoxesMode", "tabIndex", "virtualModeEnabled", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable animationEnabled?: boolean;
  @bindable createChildren?: Function;
  @bindable dataSource?: string[] | DevExpress.ui.CollectionWidgetItem[];
  @bindable dataStructure?: string;
  @bindable disabled?: boolean;
  @bindable disabledExpr?: Function | string;
  @bindable displayExpr?: Function | string;
  @bindable elementAttr?: any;
  @bindable expandAllEnabled?: boolean;
  @bindable expandedExpr?: Function | string;
  @bindable expandEvent?: string;
  @bindable expandNodesRecursive?: boolean;
  @bindable focusStateEnabled?: boolean;
  @bindable hasItemsExpr?: Function | string;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable items?: DevExpress.ui.dxTreeViewItem[];
  @bindable itemsExpr?: Function | string;
  @bindable itemTemplate?: any;
  @bindable keyExpr?: Function | string;
  @bindable noDataText?: string;
  @bindable parentIdExpr?: Function | string;
  @bindable rootValue?: any;
  @bindable rtlEnabled?: boolean;
  @bindable scrollDirection?: string;
  @bindable searchEditorOptions?: DevExpress.ui.dxTextBoxOptions;
  @bindable searchEnabled?: boolean;
  @bindable searchExpr?: Function[];
  @bindable searchMode?: string;
  @bindable searchTimeout?: number;
  @bindable searchValue?: string;
  @bindable selectAllText?: string;
  @bindable selectByClick?: boolean;
  @bindable selectedExpr?: Function | string;
  @bindable selectionMode?: string;
  @bindable selectNodesRecursive?: boolean;
  @bindable showCheckBoxesMode?: string;
  @bindable tabIndex?: number;
  @bindable virtualModeEnabled?: boolean;
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