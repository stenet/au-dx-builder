import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxScrollView implements IDx<DevExpress.ui.dxScrollView>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxScrollView;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxScrollView";
  optionNames: string[] = ["bounceEnabled", "direction", "disabled", "elementAttr", "height", "onDisposing", "onInitialized", "onOptionChanged", "onPullDown", "onReachBottom", "onScroll", "onUpdated", "pulledDownText", "pullingDownText", "reachBottomText", "refreshingText", "rtlEnabled", "scrollByContent", "scrollByThumb", "showScrollbar", "useNative", "width"];

  @bindable bounceEnabled?: boolean;
  @bindable direction?: string;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable pulledDownText?: string;
  @bindable pullingDownText?: string;
  @bindable reachBottomText?: string;
  @bindable refreshingText?: string;
  @bindable rtlEnabled?: boolean;
  @bindable scrollByContent?: boolean;
  @bindable scrollByThumb?: boolean;
  @bindable showScrollbar?: string;
  @bindable useNative?: boolean;
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
