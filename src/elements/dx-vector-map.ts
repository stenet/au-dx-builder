import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxVectorMap implements IDx<DevExpress.viz.dxVectorMap>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxVectorMap;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxVectorMap";
  optionNames: string[] = ["annotations", "background", "bounds", "center", "commonAnnotationSettings", "controlBar", "customizeAnnotation", "disabled", "elementAttr", "export", "layers", "legends", "loadingIndicator", "maxZoomFactor", "onCenterChanged", "onClick", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onOptionChanged", "onSelectionChanged", "onTooltipHidden", "onTooltipShown", "onZoomFactorChanged", "panningEnabled", "pathModified", "projection", "redrawOnResize", "rtlEnabled", "size", "theme", "title", "tooltip", "touchEnabled", "wheelEnabled", "zoomFactor", "zoomingEnabled"];

  @bindable annotations?: DevExpress.viz.dxVectorMapAnnotationConfig[] | any[];
  @bindable background?: any;
  @bindable bounds?: number[];
  @bindable center?: number[];
  @bindable commonAnnotationSettings?: DevExpress.viz.dxVectorMapCommonAnnotationConfig;
  @bindable controlBar?: any;
  @bindable customizeAnnotation?: Function;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable layers?: any[];
  @bindable legends?: any[];
  @bindable loadingIndicator?: any;
  @bindable maxZoomFactor?: number;
  @bindable panningEnabled?: boolean;
  @bindable pathModified?: boolean;
  @bindable projection?: any | DevExpress.viz.VectorMapProjectionConfig | string;
  @bindable redrawOnResize?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable size?: any;
  @bindable theme?: string;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable touchEnabled?: boolean;
  @bindable wheelEnabled?: boolean;
  @bindable zoomFactor?: number;
  @bindable zoomingEnabled?: boolean;

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