import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxSankey implements IDx<DevExpress.viz.dxSankey>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.viz.dxSankey;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxSankey";
  optionNames: string[] = ["adaptiveLayout", "alignment", "dataSource", "disabled", "elementAttr", "export", "hoverEnabled", "label", "link", "loadingIndicator", "margin", "node", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onLinkClick", "onLinkHoverChanged", "onNodeClick", "onNodeHoverChanged", "onOptionChanged", "palette", "paletteExtensionMode", "pathModified", "redrawOnResize", "rtlEnabled", "size", "sortData", "sourceField", "targetField", "theme", "title", "tooltip", "weightField"];

  @bindable adaptiveLayout?: any;
  @bindable alignment?: string[];
  @bindable dataSource?: any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable export?: any;
  @bindable hoverEnabled?: boolean;
  @bindable label?: any;
  @bindable link?: any;
  @bindable loadingIndicator?: any;
  @bindable margin?: any;
  @bindable node?: any;
  @bindable palette?: string[];
  @bindable paletteExtensionMode?: string;
  @bindable pathModified?: boolean;
  @bindable redrawOnResize?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable size?: any;
  @bindable sortData?: any;
  @bindable sourceField?: string;
  @bindable targetField?: string;
  @bindable theme?: string;
  @bindable title?: string;
  @bindable tooltip?: any;
  @bindable weightField?: string;

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
