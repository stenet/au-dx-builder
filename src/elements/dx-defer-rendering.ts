import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDeferRendering implements IDx<DevExpress.ui.dxDeferRendering>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxDeferRendering;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDeferRendering";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "animation", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onRendered", "onShown", "renderWhen", "rtlEnabled", "showLoadIndicator", "staggerItemSelector", "tabIndex", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable animation?: DevExpress.animationConfig;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable renderWhen?: boolean | Promise<void>;
  @bindable rtlEnabled?: boolean;
  @bindable showLoadIndicator?: boolean;
  @bindable staggerItemSelector?: string;
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
