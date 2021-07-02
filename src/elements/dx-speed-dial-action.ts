import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxSpeedDialAction implements IDx<DevExpress.ui.dxSpeedDialAction>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxSpeedDialAction;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxSpeedDialAction";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "elementAttr", "focusStateEnabled", "hint", "hoverStateEnabled", "icon", "index", "label", "onClick", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "rtlEnabled", "tabIndex", "visible"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable icon?: string;
  @bindable index?: number;
  @bindable label?: string;
  @bindable rtlEnabled?: boolean;
  @bindable tabIndex?: number;
  @bindable visible?: boolean;
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
