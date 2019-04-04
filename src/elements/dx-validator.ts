import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxValidator implements IDx<DevExpress.ui.dxValidator>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxValidator;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxValidator";
  optionNames: string[] = ["adapter", "elementAttr", "height", "name", "onDisposing", "onInitialized", "onOptionChanged", "onValidated", "validationGroup", "validationRules", "width"];

  @bindable adapter?: any;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable name?: string;
  @bindable validationGroup?: string;
  @bindable validationRules?: DevExpress.ui.RequiredRule[] | DevExpress.ui.NumericRule[] | DevExpress.ui.RangeRule[] | DevExpress.ui.StringLengthRule[] | DevExpress.ui.CustomRule[] | DevExpress.ui.CompareRule[] | DevExpress.ui.PatternRule[] | DevExpress.ui.EmailRule[];
  @bindable width?: number | Function | string;

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