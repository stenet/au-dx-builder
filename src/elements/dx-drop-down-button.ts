import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDropDownButton implements IDx<DevExpress.ui.dxDropDownButton>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxDropDownButton;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDropDownButton";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "dataSource", "deferRendering", "disabled", "displayExpr", "dropDownContentTemplate", "dropDownOptions", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "icon", "items", "itemTemplate", "keyExpr", "noDataText", "onButtonClick", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onOptionChanged", "onSelectionChanged", "opened", "rtlEnabled", "selectedItem", "selectedItemKey", "splitButton", "stylingMode", "tabIndex", "text", "useSelectMode", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable dataSource?: DevExpress.ui.CollectionWidgetItem[] | any[];
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable displayExpr?: Function | string;
  @bindable dropDownContentTemplate?: any;
  @bindable dropDownOptions?: DevExpress.ui.dxPopupOptions;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable icon?: string;
  @bindable items?: any[];
  @bindable itemTemplate?: any;
  @bindable keyExpr?: string;
  @bindable noDataText?: string;
  @bindable opened?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable selectedItem?: any | number | string;
  @bindable selectedItemKey?: number | string;
  @bindable splitButton?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable useSelectMode?: boolean;
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