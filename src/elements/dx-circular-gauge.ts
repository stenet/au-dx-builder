import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxCircularGauge implements IDx<DevExpress.viz.dxCircularGauge>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxCircularGauge;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxCircularGauge";
  optionNames: string[] = ["animation", "containerBackgroundColor", "disabled", "elementAttr", "export", "geometry", "loadingIndicator", "margin", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onOptionChanged", "onTooltipHidden", "onTooltipShown", "pathModified", "rangeContainer", "redrawOnResize", "rtlEnabled", "scale", "size", "subvalueIndicator", "subvalues", "theme", "title", "tooltip", "value", "valueIndicator"];

  @bindable animation?: any;
  @bindable containerBackgroundColor?: string;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable geometry?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable pathModified?: boolean;
  @bindable rangeContainer?: any;
  @bindable redrawOnResize?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable scale?: any;
  @bindable size?: any;
  @bindable subvalueIndicator?: any;
  @bindable subvalues?: number[];
  @bindable theme?: string;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable value?: number;
  @bindable valueIndicator?: any;

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