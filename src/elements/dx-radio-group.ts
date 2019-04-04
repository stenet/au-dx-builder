import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxRadioGroup implements IDx<DevExpress.ui.dxRadioGroup>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxRadioGroup;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxRadioGroup";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "dataSource", "disabled", "displayExpr", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "isValid", "items", "itemTemplate", "layout", "name", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onValueChanged", "readOnly", "rtlEnabled", "tabIndex", "validationError", "validationMessageMode", "value", "valueExpr", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable dataSource?: DevExpress.ui.CollectionWidgetItem[] | any[];
  @bindable disabled?: boolean;
  @bindable displayExpr?: Function | string;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable isValid?: boolean;
  @bindable items?: any[];
  @bindable itemTemplate?: any;
  @bindable layout?: string;
  @bindable name?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable tabIndex?: number;
  @bindable validationError?: any;
  @bindable validationMessageMode?: string;
  @bindable value?: any;
  @bindable valueExpr?: Function | string;
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