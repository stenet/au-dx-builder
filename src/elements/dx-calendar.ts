import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxCalendar implements IDx<DevExpress.ui.dxCalendar>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxCalendar;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxCalendar";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "cellTemplate", "dateSerializationFormat", "disabled", "disabledDates", "elementAttr", "firstDayOfWeek", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "isValid", "max", "maxZoomLevel", "min", "minZoomLevel", "name", "onDisposing", "onInitialized", "onOptionChanged", "onValueChanged", "readOnly", "rtlEnabled", "showTodayButton", "tabIndex", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "visible", "width", "zoomLevel"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable cellTemplate?: any;
  @bindable dateSerializationFormat?: string;
  @bindable disabled?: boolean;
  @bindable disabledDates?: Date[];
  @bindable elementAttr?: any;
  @bindable firstDayOfWeek?: number | string;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable isValid?: boolean;
  @bindable max?: Date | number | string;
  @bindable maxZoomLevel?: string;
  @bindable min?: Date | number | string;
  @bindable minZoomLevel?: string;
  @bindable name?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showTodayButton?: boolean;
  @bindable tabIndex?: number;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: Date | number | string;
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
  @bindable zoomLevel?: string;
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