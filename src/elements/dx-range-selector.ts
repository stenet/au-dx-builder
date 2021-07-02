import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxRangeSelector implements IDx<DevExpress.viz.dxRangeSelector>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.viz.dxRangeSelector;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxRangeSelector";
  optionNames: string[] = ["background", "behavior", "chart", "containerBackgroundColor", "dataSource", "dataSourceField", "disabled", "elementAttr", "export", "indent", "loadingIndicator", "margin", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onOptionChanged", "onValueChanged", "pathModified", "redrawOnResize", "rtlEnabled", "scale", "selectedRangeColor", "selectedRangeUpdateMode", "shutter", "size", "sliderHandle", "sliderMarker", "theme", "title", "value"];

  @bindable background?: any;
  @bindable behavior?: any;
  @bindable chart?: any;
  @bindable containerBackgroundColor?: string;
  @bindable dataSource?: any[];
  @bindable dataSourceField?: string;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable indent?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable pathModified?: boolean;
  @bindable redrawOnResize?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable scale?: any;
  @bindable selectedRangeColor?: string;
  @bindable selectedRangeUpdateMode?: string;
  @bindable shutter?: any;
  @bindable size?: any;
  @bindable sliderHandle?: any;
  @bindable sliderMarker?: any;
  @bindable theme?: string;
  @bindable title?: string;
  @bindable value?: number[] | string[] | Date[];

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
