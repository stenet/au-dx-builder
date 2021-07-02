import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxResponsiveBox implements IDx<DevExpress.ui.dxResponsiveBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxResponsiveBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxResponsiveBox";
  optionNames: string[] = ["cols", "dataSource", "disabled", "elementAttr", "height", "hoverStateEnabled", "itemHoldTimeout", "items", "itemTemplate", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onOptionChanged", "rows", "rtlEnabled", "screenByWidth", "singleColumnScreen", "visible", "width"];

  @bindable cols?: any[];
  @bindable dataSource?: string[] | DevExpress.ui.dxResponsiveBoxItem[] | any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable rows?: any[];
  @bindable rtlEnabled?: boolean;
  @bindable screenByWidth?: Function;
  @bindable singleColumnScreen?: string;
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
