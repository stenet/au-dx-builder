import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxFunnel implements IDx<DevExpress.viz.dxFunnel>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.viz.dxFunnel;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxFunnel";
  optionNames: string[] = ["adaptiveLayout", "algorithm", "argumentField", "colorField", "dataSource", "disabled", "elementAttr", "export", "hoverEnabled", "inverted", "item", "label", "legend", "loadingIndicator", "margin", "neckHeight", "neckWidth", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onHoverChanged", "onIncidentOccurred", "onInitialized", "onItemClick", "onLegendClick", "onOptionChanged", "onSelectionChanged", "palette", "paletteExtensionMode", "pathModified", "redrawOnResize", "rtlEnabled", "selectionMode", "size", "sortData", "theme", "title", "tooltip", "valueField"];

  @bindable adaptiveLayout?: any;
  @bindable algorithm?: string;
  @bindable argumentField?: string;
  @bindable colorField?: string;
  @bindable dataSource?: any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable hoverEnabled?: boolean;
  @bindable inverted?: boolean;
  @bindable item?: any;
  @bindable label?: any;
  @bindable legend?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable neckHeight?: number;
  @bindable neckWidth?: number;
  @bindable palette?: string[];
  @bindable paletteExtensionMode?: string;
  @bindable pathModified?: boolean;
  @bindable redrawOnResize?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable selectionMode?: string;
  @bindable size?: any;
  @bindable sortData?: boolean;
  @bindable theme?: string;
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