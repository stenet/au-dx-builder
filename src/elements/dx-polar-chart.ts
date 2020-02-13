import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxPolarChart implements IDx<DevExpress.viz.dxPolarChart>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxPolarChart;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxPolarChart";
  optionNames: string[] = ["adaptiveLayout", "animation", "argumentAxis", "barGroupPadding", "barGroupWidth", "barWidth", "commonAxisSettings", "commonSeriesSettings", "containerBackgroundColor", "customizeLabel", "customizePoint", "dataPrepareSettings", "dataSource", "disabled", "elementAttr", "equalBarWidth", "export", "legend", "loadingIndicator", "margin", "negativesAsZeroes", "onArgumentAxisClick", "onDisposing", "onDone", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onLegendClick", "onOptionChanged", "onPointClick", "onPointHoverChanged", "onPointSelectionChanged", "onSeriesClick", "onSeriesHoverChanged", "onSeriesSelectionChanged", "onTooltipHidden", "onTooltipShown", "onZoomEnd", "onZoomStart", "palette", "paletteExtensionMode", "pathModified", "pointSelectionMode", "redrawOnResize", "resolveLabelOverlapping", "rtlEnabled", "series", "seriesSelectionMode", "seriesTemplate", "size", "theme", "title", "tooltip", "useSpiderWeb", "valueAxis"];

  @bindable adaptiveLayout?: any;
  @bindable animation?: boolean;
  @bindable argumentAxis?: any;
  @bindable barGroupPadding?: number;
  @bindable barGroupWidth?: number;
  @bindable barWidth?: number;
  @bindable commonAxisSettings?: any;
  @bindable commonSeriesSettings?: any;
  @bindable containerBackgroundColor?: string;
  @bindable customizeLabel?: Function;
  @bindable customizePoint?: Function;
  @bindable dataPrepareSettings?: any;
  @bindable dataSource?: any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable equalBarWidth?: boolean;
  @bindable export?: any;
  @bindable legend?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable negativesAsZeroes?: boolean;
  @bindable palette?: string[];
  @bindable paletteExtensionMode?: string;
  @bindable pathModified?: boolean;
  @bindable pointSelectionMode?: string;
  @bindable redrawOnResize?: boolean;
  @bindable resolveLabelOverlapping?: string;
  @bindable rtlEnabled?: boolean;
  @bindable series?: any[];
  @bindable seriesSelectionMode?: string;
  @bindable seriesTemplate?: any;
  @bindable size?: any;
  @bindable theme?: string;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable useSpiderWeb?: boolean;
  @bindable valueAxis?: any;

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