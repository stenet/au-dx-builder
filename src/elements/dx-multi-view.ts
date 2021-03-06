import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxMultiView implements IDx<DevExpress.ui.dxMultiView>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxMultiView;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxMultiView";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "animationEnabled", "dataSource", "deferRendering", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "itemHoldTimeout", "items", "itemTemplate", "loop", "noDataText", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onOptionChanged", "onSelectionChanged", "rtlEnabled", "selectedIndex", "selectedItem", "swipeEnabled", "tabIndex", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable animationEnabled?: boolean;
  @bindable dataSource?: string[] | DevExpress.ui.dxMultiViewItem[] | any[];
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable loop?: boolean;
  @bindable noDataText?: string;
  @bindable rtlEnabled?: boolean;
  @bindable selectedIndex?: number;
  @bindable selectedItem?: any;
  @bindable swipeEnabled?: boolean;
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
