import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTreeList implements IDx<DevExpress.ui.dxTreeList>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxTreeList;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTreeList";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoExpandAll", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "dataSource", "dataStructure", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "expandedRowKeys", "expandNodesOnFiltering", "filterBuilder", "filterBuilderPopup", "filterMode", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "focusStateEnabled", "hasItemsExpr", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "itemsExpr", "keyboardNavigation", "keyExpr", "loadPanel", "noDataText", "onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onNodesInitialized", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSelectionChanged", "onToolbarPreparing", "pager", "paging", "parentIdExpr", "remoteOperations", "renderAsync", "repaintChangesOnly", "rootValue", "rowAlternationEnabled", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sorting", "stateStoring", "tabIndex", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowColumnReordering?: boolean;
  @bindable allowColumnResizing?: boolean;
  @bindable autoExpandAll?: boolean;
  @bindable cacheEnabled?: boolean;
  @bindable cellHintEnabled?: boolean;
  @bindable columnAutoWidth?: boolean;
  @bindable columnChooser?: any;
  @bindable columnFixing?: any;
  @bindable columnHidingEnabled?: boolean;
  @bindable columnMinWidth?: number;
  @bindable columnResizingMode?: string;
  @bindable columns?: DevExpress.ui.dxTreeListColumn[] | string[];
  @bindable columnWidth?: number;
  @bindable customizeColumns?: Function;
  @bindable dataSource?: any[];
  @bindable dataStructure?: string;
  @bindable dateSerializationFormat?: string;
  @bindable disabled?: boolean;
  @bindable editing?: any;
  @bindable elementAttr?: any;
  @bindable errorRowEnabled?: boolean;
  @bindable expandedRowKeys?: any[];
  @bindable expandNodesOnFiltering?: boolean;
  @bindable filterBuilder?: DevExpress.ui.dxFilterBuilderOptions;
  @bindable filterBuilderPopup?: DevExpress.ui.dxPopupOptions;
  @bindable filterMode?: string;
  @bindable filterPanel?: any;
  @bindable filterRow?: any;
  @bindable filterSyncEnabled?: boolean;
  @bindable filterValue?: any;
  @bindable focusedColumnIndex?: number;
  @bindable focusedRowEnabled?: boolean;
  @bindable focusedRowIndex?: number;
  @bindable focusedRowKey?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable hasItemsExpr?: Function | string;
  @bindable headerFilter?: any;
  @bindable height?: number | Function | string;
  @bindable highlightChanges?: boolean;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemsExpr?: Function | string;
  @bindable keyboardNavigation?: any;
  @bindable keyExpr?: Function | string;
  @bindable loadPanel?: any;
  @bindable noDataText?: string;
  @bindable pager?: any;
  @bindable paging?: any;
  @bindable parentIdExpr?: Function | string;
  @bindable remoteOperations?: any;
  @bindable renderAsync?: boolean;
  @bindable repaintChangesOnly?: boolean;
  @bindable rootValue?: any;
  @bindable rowAlternationEnabled?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable scrolling?: any;
  @bindable searchPanel?: any;
  @bindable selectedRowKeys?: any[];
  @bindable selection?: any;
  @bindable showBorders?: boolean;
  @bindable showColumnHeaders?: boolean;
  @bindable showColumnLines?: boolean;
  @bindable showRowLines?: boolean;
  @bindable sorting?: any;
  @bindable stateStoring?: any;
  @bindable tabIndex?: number;
  @bindable twoWayBindingEnabled?: boolean;
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
  @bindable wordWrapEnabled?: boolean;
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