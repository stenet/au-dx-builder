import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxBox implements IDx<DevExpress.ui.dxBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxBox";
  optionNames: string[] = ["align", "crossAlign", "dataSource", "direction", "disabled", "elementAttr", "height", "hoverStateEnabled", "itemHoldTimeout", "items", "itemTemplate", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onOptionChanged", "rtlEnabled", "visible", "width"];

  @bindable align?: string;
  @bindable crossAlign?: string;
  @bindable dataSource?: string[] | DevExpress.ui.dxBoxItem[] | any[];
  @bindable direction?: string;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable rtlEnabled?: boolean;
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