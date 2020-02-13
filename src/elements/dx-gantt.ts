import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxGantt implements IDx<DevExpress.ui.dxGantt>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxGantt;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxGantt";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowSelection", "columns", "dependencies", "disabled", "editing", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onSelectionChanged", "resourceAssignments", "resources", "rtlEnabled", "scaleType", "selectedRowKey", "showResources", "showRowLines", "tabIndex", "taskListWidth", "tasks", "taskTitlePosition", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowSelection?: boolean;
  @bindable columns?: DevExpress.ui.dxTreeListColumn[] | string[];
  @bindable dependencies?: any;
  @bindable disabled?: boolean;
  @bindable editing?: any;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable resourceAssignments?: any;
  @bindable resources?: any;
  @bindable rtlEnabled?: boolean;
  @bindable scaleType?: string;
  @bindable selectedRowKey?: any;
  @bindable showResources?: boolean;
  @bindable showRowLines?: boolean;
  @bindable tabIndex?: number;
  @bindable taskListWidth?: number;
  @bindable tasks?: any;
  @bindable taskTitlePosition?: string;
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