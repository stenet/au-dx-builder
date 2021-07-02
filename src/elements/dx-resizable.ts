import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxResizable implements IDx<DevExpress.ui.dxResizable>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxResizable;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxResizable";
  optionNames: string[] = ["elementAttr", "handles", "height", "maxHeight", "maxWidth", "minHeight", "minWidth", "onDisposing", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "rtlEnabled", "width"];

  @bindable elementAttr?: any;
  @bindable handles?: string;
  @bindable height?: number | Function | string;
  @bindable maxHeight?: number;
  @bindable maxWidth?: number;
  @bindable minHeight?: number;
  @bindable minWidth?: number;
  @bindable rtlEnabled?: boolean;
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
