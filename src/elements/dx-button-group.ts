import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxButtonGroup implements IDx<DevExpress.ui.dxButtonGroup>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxButtonGroup;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxButtonGroup";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "buttonTemplate", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "items", "keyExpr", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onOptionChanged", "onSelectionChanged", "rtlEnabled", "selectedItemKeys", "selectedItems", "selectionMode", "stylingMode", "tabIndex", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable buttonTemplate?: any;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable items?: DevExpress.ui.dxButtonGroupItem[];
  @bindable keyExpr?: Function | string;
  @bindable rtlEnabled?: boolean;
  @bindable selectedItemKeys?: any[];
  @bindable selectedItems?: any[];
  @bindable selectionMode?: string;
  @bindable stylingMode?: string;
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
