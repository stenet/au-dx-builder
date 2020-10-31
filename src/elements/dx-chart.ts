import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxChart implements IDx<DevExpress.viz.dxChart>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxChart;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxChart";
  optionNames: string[] = ["adaptiveLayout", "adjustOnZoom", "animation", "annotations", "argumentAxis", "autoHidePointMarkers", "barGroupPadding", "barGroupWidth", "commonAnnotationSettings", "commonAxisSettings", "commonPaneSettings", "commonSeriesSettings", "containerBackgroundColor", "crosshair", "customizeAnnotation", "customizeLabel", "customizePoint", "dataPrepareSettings", "dataSource", "defaultPane", "disabled", "elementAttr", "export", "legend", "loadingIndicator", "margin", "maxBubbleSize", "minBubbleSize", "negativesAsZeroes", "onArgumentAxisClick", "onDisposing", "onDone", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onLegendClick", "onOptionChanged", "onPointClick", "onPointHoverChanged", "onPointSelectionChanged", "onSeriesClick", "onSeriesHoverChanged", "onSeriesSelectionChanged", "onTooltipHidden", "onTooltipShown", "onZoomEnd", "onZoomStart", "palette", "paletteExtensionMode", "panes", "pathModified", "pointSelectionMode", "redrawOnResize", "resizePanesOnZoom", "resolveLabelOverlapping", "rotated", "rtlEnabled", "scrollBar", "series", "seriesSelectionMode", "seriesTemplate", "size", "stickyHovering", "synchronizeMultiAxes", "theme", "title", "tooltip", "valueAxis", "zoomAndPan"];

  @bindable adaptiveLayout?: any;
  @bindable adjustOnZoom?: boolean;
  @bindable animation?: boolean;
  @bindable annotations?: DevExpress.viz.dxChartAnnotationConfig[] | any[];
  @bindable argumentAxis?: any;
  @bindable autoHidePointMarkers?: boolean;
  @bindable barGroupPadding?: number;
  @bindable barGroupWidth?: number;
  @bindable commonAnnotationSettings?: DevExpress.viz.dxChartCommonAnnotationConfig;
  @bindable commonAxisSettings?: any;
  @bindable commonPaneSettings?: any;
  @bindable commonSeriesSettings?: any;
  @bindable containerBackgroundColor?: string;
  @bindable crosshair?: any;
  @bindable customizeAnnotation?: Function;
  @bindable customizeLabel?: Function;
  @bindable customizePoint?: Function;
  @bindable dataPrepareSettings?: any;
  @bindable dataSource?: any[];
  @bindable defaultPane?: string;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable legend?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable maxBubbleSize?: number;
  @bindable minBubbleSize?: number;
  @bindable negativesAsZeroes?: boolean;
  @bindable palette?: string[];
  @bindable paletteExtensionMode?: string;
  @bindable panes?: any[];
  @bindable pathModified?: boolean;
  @bindable pointSelectionMode?: string;
  @bindable redrawOnResize?: boolean;
  @bindable resizePanesOnZoom?: boolean;
  @bindable resolveLabelOverlapping?: string;
  @bindable rotated?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable scrollBar?: any;
  @bindable series?: any[];
  @bindable seriesSelectionMode?: string;
  @bindable seriesTemplate?: any;
  @bindable size?: any;
  @bindable stickyHovering?: boolean;
  @bindable synchronizeMultiAxes?: boolean;
  @bindable theme?: string;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable valueAxis?: any[];
  @bindable zoomAndPan?: any;

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