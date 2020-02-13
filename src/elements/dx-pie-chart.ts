import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxPieChart implements IDx<DevExpress.viz.dxPieChart>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxPieChart;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxPieChart";
  optionNames: string[] = ["adaptiveLayout", "animation", "centerTemplate", "commonSeriesSettings", "customizeLabel", "customizePoint", "dataSource", "diameter", "disabled", "elementAttr", "export", "innerRadius", "legend", "loadingIndicator", "margin", "minDiameter", "onDisposing", "onDone", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onLegendClick", "onOptionChanged", "onPointClick", "onPointHoverChanged", "onPointSelectionChanged", "onTooltipHidden", "onTooltipShown", "palette", "paletteExtensionMode", "pathModified", "pointSelectionMode", "redrawOnResize", "resolveLabelOverlapping", "rtlEnabled", "segmentsDirection", "series", "seriesTemplate", "size", "sizeGroup", "startAngle", "theme", "title", "tooltip", "type"];

  @bindable adaptiveLayout?: any;
  @bindable animation?: boolean;
  @bindable centerTemplate?: any;
  @bindable commonSeriesSettings?: any;
  @bindable customizeLabel?: Function;
  @bindable customizePoint?: Function;
  @bindable dataSource?: any[];
  @bindable diameter?: number;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable innerRadius?: number;
  @bindable legend?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable minDiameter?: number;
  @bindable palette?: string[];
  @bindable paletteExtensionMode?: string;
  @bindable pathModified?: boolean;
  @bindable pointSelectionMode?: string;
  @bindable redrawOnResize?: boolean;
  @bindable resolveLabelOverlapping?: string;
  @bindable rtlEnabled?: boolean;
  @bindable segmentsDirection?: string;
  @bindable series?: any[];
  @bindable seriesTemplate?: any;
  @bindable size?: any;
  @bindable sizeGroup?: string;
  @bindable startAngle?: number;
  @bindable theme?: string;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable type?: string;

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