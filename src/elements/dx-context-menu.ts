import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxContextMenu implements IDx<DevExpress.ui.dxContextMenu>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxContextMenu;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxContextMenu";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "animation", "closeOnOutsideClick", "cssClass", "dataSource", "disabled", "disabledExpr", "displayExpr", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "items", "itemsExpr", "itemTemplate", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onItemClick", "onItemContextMenu", "onItemRendered", "onOptionChanged", "onPositioning", "onSelectionChanged", "onShowing", "onShown", "position", "rtlEnabled", "selectByClick", "selectedExpr", "selectedItem", "selectionMode", "showEvent", "showSubmenuMode", "submenuDirection", "tabIndex", "target", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable animation?: any;
  @bindable closeOnOutsideClick?: boolean | Function;
  @bindable cssClass?: string;
  @bindable dataSource?: DevExpress.ui.dxContextMenuItem[];
  @bindable disabled?: boolean;
  @bindable disabledExpr?: Function | string;
  @bindable displayExpr?: Function | string;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable items?: DevExpress.ui.dxContextMenuItem[];
  @bindable itemsExpr?: Function | string;
  @bindable itemTemplate?: any;
  @bindable position?: DevExpress.positionConfig;
  @bindable rtlEnabled?: boolean;
  @bindable selectByClick?: boolean;
  @bindable selectedExpr?: Function | string;
  @bindable selectedItem?: any;
  @bindable selectionMode?: string;
  @bindable showEvent?: string;
  @bindable showSubmenuMode?: string;
  @bindable submenuDirection?: string;
  @bindable tabIndex?: number;
  @bindable target?: string | DevExpress.core.UserDefinedElement;
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