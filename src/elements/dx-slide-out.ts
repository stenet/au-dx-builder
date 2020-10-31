import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxSlideOut implements IDx<DevExpress.ui.dxSlideOut>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxSlideOut;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxSlideOut";
  optionNames: string[] = ["activeStateEnabled", "contentTemplate", "dataSource", "disabled", "elementAttr", "height", "hint", "hoverStateEnabled", "itemHoldTimeout", "items", "itemTemplate", "menuGrouped", "menuGroupTemplate", "menuItemTemplate", "menuPosition", "menuVisible", "noDataText", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onMenuGroupRendered", "onMenuItemRendered", "onOptionChanged", "onSelectionChanged", "rtlEnabled", "selectedIndex", "selectedItem", "swipeEnabled", "visible", "width"];

  @bindable activeStateEnabled?: boolean;
  @bindable contentTemplate?: any;
  @bindable dataSource?: string[] | DevExpress.ui.dxSlideOutItem[] | any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable menuGrouped?: boolean;
  @bindable menuGroupTemplate?: any;
  @bindable menuItemTemplate?: any;
  @bindable menuPosition?: string;
  @bindable menuVisible?: boolean;
  @bindable noDataText?: string;
  @bindable rtlEnabled?: boolean;
  @bindable selectedIndex?: number;
  @bindable selectedItem?: any;
  @bindable swipeEnabled?: boolean;
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