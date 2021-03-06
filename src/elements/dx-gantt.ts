import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
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

  scope?: Scope;
  instance?: DevExpress.ui.dxGantt;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxGantt";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowSelection", "columns", "contextMenu", "dependencies", "disabled", "editing", "elementAttr", "firstDayOfWeek", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "onContentReady", "onContextMenuPreparing", "onCustomCommand", "onDependencyDeleted", "onDependencyDeleting", "onDependencyInserted", "onDependencyInserting", "onDisposing", "onInitialized", "onOptionChanged", "onResourceAssigned", "onResourceAssigning", "onResourceDeleted", "onResourceDeleting", "onResourceInserted", "onResourceInserting", "onResourceManagerDialogShowing", "onResourceUnassigned", "onResourceUnassigning", "onSelectionChanged", "onTaskClick", "onTaskDblClick", "onTaskDeleted", "onTaskDeleting", "onTaskEditDialogShowing", "onTaskInserted", "onTaskInserting", "onTaskMoving", "onTaskUpdated", "onTaskUpdating", "resourceAssignments", "resources", "rootValue", "scaleType", "selectedRowKey", "showResources", "showRowLines", "stripLines", "tabIndex", "taskContentTemplate", "taskListWidth", "taskProgressTooltipContentTemplate", "tasks", "taskTimeTooltipContentTemplate", "taskTitlePosition", "taskTooltipContentTemplate", "toolbar", "validation", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowSelection?: boolean;
  @bindable columns?: DevExpress.ui.dxTreeListColumn[] | string[];
  @bindable contextMenu?: DevExpress.ui.dxGanttContextMenu;
  @bindable dependencies?: any;
  @bindable disabled?: boolean;
  @bindable editing?: any;
  @bindable elementAttr?: any;
  @bindable firstDayOfWeek?: number | string;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable resourceAssignments?: any;
  @bindable resources?: any;
  @bindable rootValue?: any;
  @bindable scaleType?: string;
  @bindable selectedRowKey?: any;
  @bindable showResources?: boolean;
  @bindable showRowLines?: boolean;
  @bindable stripLines?: DevExpress.ui.dxGanttStripLine[];
  @bindable tabIndex?: number;
  @bindable taskContentTemplate?: any;
  @bindable taskListWidth?: number;
  @bindable taskProgressTooltipContentTemplate?: any;
  @bindable tasks?: any;
  @bindable taskTimeTooltipContentTemplate?: any;
  @bindable taskTitlePosition?: string;
  @bindable taskTooltipContentTemplate?: any;
  @bindable toolbar?: DevExpress.ui.dxGanttToolbar;
  @bindable validation?: any;
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
