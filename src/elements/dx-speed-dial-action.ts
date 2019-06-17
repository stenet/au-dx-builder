import { autoinject, bindable, noView, processContent } from "aurelia-framework";
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

  instance?: DevExpress.ui.dxSpeedDialAction;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxSpeedDialAction";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "elementAttr", "focusStateEnabled", "hint", "hoverStateEnabled", "icon", "onClick", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "rtlEnabled", "tabIndex"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable icon?: string;
  @bindable rtlEnabled?: boolean;
  @bindable tabIndex?: number;
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