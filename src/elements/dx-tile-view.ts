import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTileView implements IDx<DevExpress.ui.dxTileView>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxTileView;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTileView";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "baseItemHeight", "baseItemWidth", "dataSource", "direction", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "itemHoldTimeout", "itemMargin", "items", "itemTemplate", "noDataText", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onOptionChanged", "rtlEnabled", "showScrollbar", "tabIndex", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable baseItemHeight?: number;
  @bindable baseItemWidth?: number;
  @bindable dataSource?: string[] | DevExpress.ui.dxTileViewItem[] | any[];
  @bindable direction?: string;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable itemMargin?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable noDataText?: string;
  @bindable rtlEnabled?: boolean;
  @bindable showScrollbar?: boolean;
  @bindable tabIndex?: number;
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
