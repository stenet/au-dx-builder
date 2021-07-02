import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxPivotGrid implements IDx<DevExpress.ui.dxPivotGrid>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxPivotGrid;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxPivotGrid";
  optionNames: string[] = ["allowExpandAll", "allowFiltering", "allowSorting", "allowSortingBySummary", "dataFieldArea", "dataSource", "disabled", "elementAttr", "encodeHtml", "export", "fieldChooser", "fieldPanel", "headerFilter", "height", "hideEmptySummaryCells", "hint", "loadPanel", "onCellClick", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDisposing", "onExported", "onExporting", "onFileSaving", "onInitialized", "onOptionChanged", "rowHeaderLayout", "rtlEnabled", "scrolling", "showBorders", "showColumnGrandTotals", "showColumnTotals", "showRowGrandTotals", "showRowTotals", "showTotalsPrior", "stateStoring", "tabIndex", "texts", "visible", "width", "wordWrapEnabled"];

  @bindable allowExpandAll?: boolean;
  @bindable allowFiltering?: boolean;
  @bindable allowSorting?: boolean;
  @bindable allowSortingBySummary?: boolean;
  @bindable dataFieldArea?: string;
  @bindable dataSource?: any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable encodeHtml?: boolean;
  @bindable export?: any;
  @bindable fieldChooser?: any;
  @bindable fieldPanel?: any;
  @bindable headerFilter?: any;
  @bindable height?: number | Function | string;
  @bindable hideEmptySummaryCells?: boolean;
  @bindable hint?: string;
  @bindable loadPanel?: any;
  @bindable rowHeaderLayout?: string;
  @bindable rtlEnabled?: boolean;
  @bindable scrolling?: any;
  @bindable showBorders?: boolean;
  @bindable showColumnGrandTotals?: boolean;
  @bindable showColumnTotals?: boolean;
  @bindable showRowGrandTotals?: boolean;
  @bindable showRowTotals?: boolean;
  @bindable showTotalsPrior?: string;
  @bindable stateStoring?: any;
  @bindable tabIndex?: number;
  @bindable texts?: any;
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