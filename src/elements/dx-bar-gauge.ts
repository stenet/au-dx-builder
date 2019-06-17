import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxBarGauge implements IDx<DevExpress.viz.dxBarGauge>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxBarGauge;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxBarGauge";
  optionNames: string[] = ["animation", "backgroundColor", "barSpacing", "baseValue", "disabled", "elementAttr", "endValue", "export", "geometry", "label", "legend", "loadingIndicator", "margin", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onOptionChanged", "onTooltipHidden", "onTooltipShown", "palette", "paletteExtensionMode", "pathModified", "redrawOnResize", "relativeInnerRadius", "resolveLabelOverlapping", "rtlEnabled", "size", "startValue", "theme", "title", "tooltip", "values"];

  @bindable animation?: any;
  @bindable backgroundColor?: string;
  @bindable barSpacing?: number;
  @bindable baseValue?: number;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable endValue?: number;
  @bindable export?: any;
  @bindable geometry?: any;
  @bindable label?: any;
  @bindable legend?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable palette?: string[];
  @bindable paletteExtensionMode?: string;
  @bindable pathModified?: boolean;
  @bindable redrawOnResize?: boolean;
  @bindable relativeInnerRadius?: number;
  @bindable resolveLabelOverlapping?: string;
  @bindable rtlEnabled?: boolean;
  @bindable size?: any;
  @bindable startValue?: number;
  @bindable theme?: string;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable values?: number[];

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