import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxScheduler implements IDx<DevExpress.ui.dxScheduler>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxScheduler;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxScheduler";
  optionNames: string[] = ["accessKey", "adaptivityEnabled", "allDayExpr", "appointmentCollectorTemplate", "appointmentDragging", "appointmentTemplate", "appointmentTooltipTemplate", "cellDuration", "crossScrollingEnabled", "currentDate", "currentView", "customizeDateNavigatorText", "dataCellTemplate", "dataSource", "dateCellTemplate", "dateSerializationFormat", "descriptionExpr", "disabled", "dropDownAppointmentTemplate", "editing", "elementAttr", "endDateExpr", "endDateTimeZoneExpr", "endDayHour", "firstDayOfWeek", "focusStateEnabled", "groupByDate", "groups", "height", "hint", "indicatorUpdateInterval", "max", "maxAppointmentsPerCell", "min", "noDataText", "onAppointmentAdded", "onAppointmentAdding", "onAppointmentClick", "onAppointmentContextMenu", "onAppointmentDblClick", "onAppointmentDeleted", "onAppointmentDeleting", "onAppointmentFormCreated", "onAppointmentFormOpening", "onAppointmentRendered", "onAppointmentUpdated", "onAppointmentUpdating", "onCellClick", "onCellContextMenu", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "recurrenceEditMode", "recurrenceExceptionExpr", "recurrenceRuleExpr", "remoteFiltering", "resourceCellTemplate", "resources", "rtlEnabled", "selectedCellData", "shadeUntilCurrentTime", "showAllDayPanel", "showCurrentTimeIndicator", "startDateExpr", "startDateTimeZoneExpr", "startDayHour", "tabIndex", "textExpr", "timeCellTemplate", "timeZone", "useDropDownViewSwitcher", "views", "visible", "width"];

  @bindable accessKey?: string;
  @bindable adaptivityEnabled?: boolean;
  @bindable allDayExpr?: string;
  @bindable appointmentCollectorTemplate?: any;
  @bindable appointmentDragging?: any;
  @bindable appointmentTemplate?: any;
  @bindable appointmentTooltipTemplate?: any;
  @bindable cellDuration?: number;
  @bindable crossScrollingEnabled?: boolean;
  @bindable currentDate?: Date | number | string;
  @bindable currentView?: string;
  @bindable customizeDateNavigatorText?: Function;
  @bindable dataCellTemplate?: any;
  @bindable dataSource?: DevExpress.ui.dxSchedulerAppointment[];
  @bindable dateCellTemplate?: any;
  @bindable dateSerializationFormat?: string;
  @bindable descriptionExpr?: string;
  @bindable disabled?: boolean;
  @bindable dropDownAppointmentTemplate?: any;
  @bindable editing?: boolean;
  @bindable elementAttr?: any;
  @bindable endDateExpr?: string;
  @bindable endDateTimeZoneExpr?: string;
  @bindable endDayHour?: number;
  @bindable firstDayOfWeek?: number | string;
  @bindable focusStateEnabled?: boolean;
  @bindable groupByDate?: boolean;
  @bindable groups?: string[];
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable indicatorUpdateInterval?: number;
  @bindable max?: Date | number | string;
  @bindable maxAppointmentsPerCell?: number | string;
  @bindable min?: Date | number | string;
  @bindable noDataText?: string;
  @bindable recurrenceEditMode?: string;
  @bindable recurrenceExceptionExpr?: string;
  @bindable recurrenceRuleExpr?: string;
  @bindable remoteFiltering?: boolean;
  @bindable resourceCellTemplate?: any;
  @bindable resources?: any[];
  @bindable rtlEnabled?: boolean;
  @bindable selectedCellData?: any[];
  @bindable shadeUntilCurrentTime?: boolean;
  @bindable showAllDayPanel?: boolean;
  @bindable showCurrentTimeIndicator?: boolean;
  @bindable startDateExpr?: string;
  @bindable startDateTimeZoneExpr?: string;
  @bindable startDayHour?: number;
  @bindable tabIndex?: number;
  @bindable textExpr?: string;
  @bindable timeCellTemplate?: any;
  @bindable timeZone?: string;
  @bindable useDropDownViewSwitcher?: boolean;
  @bindable views?: string[] | any[];
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
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