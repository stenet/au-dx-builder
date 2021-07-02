import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDataGrid implements IDx<DevExpress.ui.dxDataGrid>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxDataGrid;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDataGrid";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "customizeExportData", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "focusStateEnabled", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExported", "onExporting", "onFileSaving", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "tabIndex", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowColumnReordering?: boolean;
  @bindable allowColumnResizing?: boolean;
  @bindable autoNavigateToFocusedRow?: boolean;
  @bindable cacheEnabled?: boolean;
  @bindable cellHintEnabled?: boolean;
  @bindable columnAutoWidth?: boolean;
  @bindable columnChooser?: any;
  @bindable columnFixing?: any;
  @bindable columnHidingEnabled?: boolean;
  @bindable columnMinWidth?: number;
  @bindable columnResizingMode?: string;
  @bindable columns?: DevExpress.ui.dxDataGridColumn[] | string[];
  @bindable columnWidth?: number;
  @bindable customizeColumns?: Function;
  @bindable customizeExportData?: Function;
  @bindable dataSource?: any[];
  @bindable dateSerializationFormat?: string;
  @bindable disabled?: boolean;
  @bindable editing?: any;
  @bindable elementAttr?: any;
  @bindable errorRowEnabled?: boolean;
  @bindable export?: any;
  @bindable filterBuilder?: DevExpress.ui.dxFilterBuilderOptions;
  @bindable filterBuilderPopup?: DevExpress.ui.dxPopupOptions;
  @bindable filterPanel?: any;
  @bindable filterRow?: any;
  @bindable filterSyncEnabled?: boolean | string;
  @bindable filterValue?: any;
  @bindable focusedColumnIndex?: number;
  @bindable focusedRowEnabled?: boolean;
  @bindable focusedRowIndex?: number;
  @bindable focusedRowKey?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable grouping?: any;
  @bindable groupPanel?: any;
  @bindable headerFilter?: any;
  @bindable height?: number | Function | string;
  @bindable highlightChanges?: boolean;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable keyboardNavigation?: any;
  @bindable keyExpr?: string[];
  @bindable loadPanel?: any;
  @bindable masterDetail?: any;
  @bindable noDataText?: string;
  @bindable pager?: any;
  @bindable paging?: any;
  @bindable remoteOperations?: boolean | string;
  @bindable renderAsync?: boolean;
  @bindable repaintChangesOnly?: boolean;
  @bindable rowAlternationEnabled?: boolean;
  @bindable rowDragging?: any;
  @bindable rowTemplate?: any;
  @bindable rtlEnabled?: boolean;
  @bindable scrolling?: any;
  @bindable searchPanel?: any;
  @bindable selectedRowKeys?: any[];
  @bindable selection?: any;
  @bindable selectionFilter?: any;
  @bindable showBorders?: boolean;
  @bindable showColumnHeaders?: boolean;
  @bindable showColumnLines?: boolean;
  @bindable showRowLines?: boolean;
  @bindable sortByGroupSummaryInfo?: any[];
  @bindable sorting?: any;
  @bindable stateStoring?: any;
  @bindable summary?: any;
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
