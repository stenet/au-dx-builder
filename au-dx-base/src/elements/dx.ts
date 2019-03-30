import { IDxOptions } from "./dx-options";
import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "./dx-creator";
import { IDxElement } from "./dx-element";

@autoinject
@noView
@processContent(false)
export class Dx implements IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.DOMComponent;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  @bindable widgetName: string;
  @bindable options: IDxOptions;
}