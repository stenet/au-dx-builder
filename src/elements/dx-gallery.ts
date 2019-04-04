import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxGallery implements IDx<DevExpress.ui.dxGallery>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxGallery;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxGallery";
  optionNames: string[] = ["accessKey", "animationDuration", "animationEnabled", "dataSource", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "indicatorEnabled", "initialItemWidth", "itemHoldTimeout", "items", "itemTemplate", "loop", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onOptionChanged", "onSelectionChanged", "rtlEnabled", "selectedIndex", "selectedItem", "showIndicator", "showNavButtons", "slideshowDelay", "stretchImages", "swipeEnabled", "tabIndex", "visible", "width", "wrapAround"];

  @bindable accessKey?: string;
  @bindable animationDuration?: number;
  @bindable animationEnabled?: boolean;
  @bindable dataSource?: string[] | DevExpress.ui.CollectionWidgetItem[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable indicatorEnabled?: boolean;
  @bindable initialItemWidth?: number;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable loop?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable selectedIndex?: number;
  @bindable selectedItem?: any;
  @bindable showIndicator?: boolean;
  @bindable showNavButtons?: boolean;
  @bindable slideshowDelay?: number;
  @bindable stretchImages?: boolean;
  @bindable swipeEnabled?: boolean;
  @bindable tabIndex?: number;
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
  @bindable wrapAround?: boolean;
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