import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxValidationSummary implements IDx<DevExpress.ui.dxValidationSummary>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxValidationSummary;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxValidationSummary";
  optionNames: string[] = ["elementAttr", "hoverStateEnabled", "items", "itemTemplate", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onOptionChanged", "validationGroup"];

  @bindable elementAttr?: any;
  @bindable hoverStateEnabled?: boolean;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable validationGroup?: string;

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