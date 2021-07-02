import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxSlideOutView implements IDx<DevExpress.ui.dxSlideOutView>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxSlideOutView;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxSlideOutView";
  optionNames: string[] = ["activeStateEnabled", "contentTemplate", "disabled", "elementAttr", "height", "hint", "hoverStateEnabled", "menuPosition", "menuTemplate", "menuVisible", "onDisposing", "onInitialized", "onOptionChanged", "rtlEnabled", "swipeEnabled", "visible", "width"];

  @bindable activeStateEnabled?: boolean;
  @bindable contentTemplate?: any;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable menuPosition?: string;
  @bindable menuTemplate?: any;
  @bindable menuVisible?: boolean;
  @bindable rtlEnabled?: boolean;
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
