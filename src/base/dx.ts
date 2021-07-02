import { IDxOptionsBase } from "./dx-options";
import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "./dx-creator";
import { IDxElement } from "./dx-element";
import { IDxBase } from "./dx-base";
import { Scope } from "aurelia-binding";

@autoinject
@noView
@processContent(false)
export class Dx implements IDxBase, IDxElement {
  private _creator: DxCreator;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.DOMComponent;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;
  
  @bindable widgetName: string;
  @bindable widgetOptions: IDxOptionsBase;

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
