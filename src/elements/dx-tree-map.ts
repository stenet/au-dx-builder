import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTreeMap implements IDx<DevExpress.viz.dxTreeMap>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.viz.dxTreeMap;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTreeMap";
  optionNames: string[] = ["childrenField", "colorField", "colorizer", "dataSource", "disabled", "elementAttr", "export", "group", "hoverEnabled", "idField", "interactWithGroup", "labelField", "layoutAlgorithm", "layoutDirection", "loadingIndicator", "maxDepth", "onClick", "onDisposing", "onDrawn", "onDrill", "onExported", "onExporting", "onFileSaving", "onHoverChanged", "onIncidentOccurred", "onInitialized", "onNodesInitialized", "onNodesRendering", "onOptionChanged", "onSelectionChanged", "parentField", "pathModified", "redrawOnResize", "rtlEnabled", "selectionMode", "size", "theme", "tile", "title", "tooltip", "valueField"];

  @bindable childrenField?: string;
  @bindable colorField?: string;
  @bindable colorizer?: any;
  @bindable dataSource?: any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable group?: any;
  @bindable hoverEnabled?: boolean;
  @bindable idField?: string;
  @bindable interactWithGroup?: boolean;
  @bindable labelField?: string;
  @bindable layoutAlgorithm?: Function | string;
  @bindable layoutDirection?: string;
  @bindable loadingIndicator?: any;
  @bindable maxDepth?: number;
  @bindable parentField?: string;
  @bindable pathModified?: boolean;
  @bindable redrawOnResize?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable selectionMode?: string;
  @bindable size?: any;
  @bindable theme?: string;
  @bindable tile?: any;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable valueField?: string;

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
