import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxSparkline implements IDx<DevExpress.viz.dxSparkline>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxSparkline;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxSparkline";
  optionNames: string[] = ["argumentField", "barNegativeColor", "barPositiveColor", "dataSource", "disabled", "elementAttr", "firstLastColor", "ignoreEmptyPoints", "lineColor", "lineWidth", "lossColor", "margin", "maxColor", "maxValue", "minColor", "minValue", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onOptionChanged", "onTooltipHidden", "onTooltipShown", "pathModified", "pointColor", "pointSize", "pointSymbol", "rtlEnabled", "showFirstLast", "showMinMax", "size", "theme", "tooltip", "type", "valueField", "winColor", "winlossThreshold"];

  @bindable argumentField?: string;
  @bindable barNegativeColor?: string;
  @bindable barPositiveColor?: string;
  @bindable dataSource?: any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable firstLastColor?: string;
  @bindable ignoreEmptyPoints?: boolean;
  @bindable lineColor?: string;
  @bindable lineWidth?: number;
  @bindable lossColor?: string;
  @bindable margin?: any;
  @bindable maxColor?: string;
  @bindable maxValue?: number;
  @bindable minColor?: string;
  @bindable minValue?: number;
  @bindable pathModified?: boolean;
  @bindable pointColor?: string;
  @bindable pointSize?: number;
  @bindable pointSymbol?: string;
  @bindable rtlEnabled?: boolean;
  @bindable showFirstLast?: boolean;
  @bindable showMinMax?: boolean;
  @bindable size?: any;
  @bindable theme?: string;
  @bindable tooltip?: any;
  @bindable type?: string;
  @bindable valueField?: string;
  @bindable winColor?: string;
  @bindable winlossThreshold?: number;

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