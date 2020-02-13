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
  optionNames: string[] = ["accessKey", "activeStateEnabled", "autoZoom", "contextMenu", "customShapes", "disabled", "edges", "elementAttr", "export", "focusStateEnabled", "fullScreen", "gridSize", "height", "hint", "hoverStateEnabled", "nodes", "onContentReady", "onDataChanged", "onDisposing", "onInitialized", "onItemClick", "onItemDblClick", "onOptionChanged", "onSelectionChanged", "pageColor", "pageOrientation", "pageSize", "propertiesPanel", "readOnly", "rtlEnabled", "showGrid", "simpleView", "snapToGrid", "tabIndex", "toolbar", "toolbox", "units", "viewUnits", "visible", "width", "zoomLevel"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable autoZoom?: string;
  @bindable contextMenu?: any;
  @bindable customShapes?: any[];
  @bindable disabled?: boolean;
  @bindable edges?: any;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable fullScreen?: boolean;
  @bindable gridSize?: number;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
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
  @bindable tabIndex?: number;
  @bindable toolbar?: any;
  @bindable toolbox?: any;
  @bindable units?: string;
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