import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxPivotGridFieldChooser implements IDx<DevExpress.ui.dxPivotGridFieldChooser>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxPivotGridFieldChooser;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxPivotGridFieldChooser";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowSearch", "applyChangesMode", "dataSource", "disabled", "elementAttr", "focusStateEnabled", "headerFilter", "height", "hint", "hoverStateEnabled", "layout", "onContentReady", "onContextMenuPreparing", "onDisposing", "onInitialized", "onOptionChanged", "rtlEnabled", "searchTimeout", "state", "tabIndex", "texts", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowSearch?: boolean;
  @bindable applyChangesMode?: string;
  @bindable dataSource?: DevExpress.data.PivotGridDataSource;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable headerFilter?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable layout?: number | string;
  @bindable rtlEnabled?: boolean;
  @bindable searchTimeout?: number;
  @bindable state?: any;
  @bindable tabIndex?: number;
  @bindable texts?: any;
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
