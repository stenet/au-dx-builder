import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxMenu implements IDx<DevExpress.ui.dxMenu>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxMenu;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxMenu";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "adaptivityEnabled", "animation", "cssClass", "dataSource", "disabled", "disabledExpr", "displayExpr", "elementAttr", "focusStateEnabled", "height", "hideSubmenuOnMouseLeave", "hint", "hoverStateEnabled", "items", "itemsExpr", "itemTemplate", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemRendered", "onOptionChanged", "onSelectionChanged", "onSubmenuHidden", "onSubmenuHiding", "onSubmenuShowing", "onSubmenuShown", "orientation", "rtlEnabled", "selectByClick", "selectedExpr", "selectedItem", "selectionMode", "showFirstSubmenuMode", "showSubmenuMode", "submenuDirection", "tabIndex", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable adaptivityEnabled?: boolean;
  @bindable animation?: any;
  @bindable cssClass?: string;
  @bindable dataSource?: DevExpress.ui.dxMenuItem[];
  @bindable disabled?: boolean;
  @bindable disabledExpr?: Function | string;
  @bindable displayExpr?: Function | string;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hideSubmenuOnMouseLeave?: boolean;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable items?: DevExpress.ui.dxMenuItem[];
  @bindable itemsExpr?: Function | string;
  @bindable itemTemplate?: any;
  @bindable orientation?: string;
  @bindable rtlEnabled?: boolean;
  @bindable selectByClick?: boolean;
  @bindable selectedExpr?: Function | string;
  @bindable selectedItem?: any;
  @bindable selectionMode?: string;
  @bindable showFirstSubmenuMode?: string;
  @bindable showSubmenuMode?: string;
  @bindable submenuDirection?: string;
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
