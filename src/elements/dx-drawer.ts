import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDrawer implements IDx<DevExpress.ui.dxDrawer>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxDrawer;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDrawer";
  optionNames: string[] = ["activeStateEnabled", "animationDuration", "animationEnabled", "closeOnOutsideClick", "disabled", "elementAttr", "height", "hint", "hoverStateEnabled", "maxSize", "minSize", "onDisposing", "onInitialized", "onOptionChanged", "opened", "openedStateMode", "position", "revealMode", "rtlEnabled", "shading", "target", "template", "visible", "width"];

  @bindable activeStateEnabled?: boolean;
  @bindable animationDuration?: number;
  @bindable animationEnabled?: boolean;
  @bindable closeOnOutsideClick?: boolean | Function;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable maxSize?: number;
  @bindable minSize?: number;
  @bindable opened?: boolean;
  @bindable openedStateMode?: string;
  @bindable position?: string;
  @bindable revealMode?: string;
  @bindable rtlEnabled?: boolean;
  @bindable shading?: boolean;
  @bindable target?: Element | string;
  @bindable template?: any;
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