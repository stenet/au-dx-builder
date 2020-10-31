import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDiagram implements IDx<DevExpress.ui.dxDiagram>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxDiagram;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDiagram";
  optionNames: string[] = ["autoZoomMode", "contextMenu", "contextToolbox", "customShapes", "customShapeTemplate", "customShapeToolboxTemplate", "defaultItemProperties", "disabled", "edges", "elementAttr", "export", "fullScreen", "gridSize", "hasChanges", "height", "historyToolbar", "mainToolbar", "nodes", "onContentReady", "onCustomCommand", "onDisposing", "onInitialized", "onItemClick", "onItemDblClick", "onOptionChanged", "onSelectionChanged", "pageColor", "pageOrientation", "pageSize", "propertiesPanel", "readOnly", "rtlEnabled", "showGrid", "simpleView", "snapToGrid", "toolbox", "units", "viewToolbar", "viewUnits", "visible", "width", "zoomLevel"];

  @bindable autoZoomMode?: string;
  @bindable contextMenu?: any;
  @bindable contextToolbox?: any;
  @bindable customShapes?: any[];
  @bindable customShapeTemplate?: any;
  @bindable customShapeToolboxTemplate?: any;
  @bindable defaultItemProperties?: any;
  @bindable disabled?: boolean;
  @bindable edges?: any;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable fullScreen?: boolean;
  @bindable gridSize?: number;
  @bindable hasChanges?: boolean;
  @bindable height?: number | Function | string;
  @bindable historyToolbar?: any;
  @bindable mainToolbar?: any;
  @bindable nodes?: any;
  @bindable pageColor?: string;
  @bindable pageOrientation?: string;
  @bindable pageSize?: any;
  @bindable propertiesPanel?: any;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showGrid?: boolean;
  @bindable simpleView?: boolean;
  @bindable snapToGrid?: boolean;
  @bindable toolbox?: any;
  @bindable units?: string;
  @bindable viewToolbar?: any;
  @bindable viewUnits?: string;
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
  @bindable zoomLevel?: number;
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