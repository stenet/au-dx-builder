import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxToast implements IDx<DevExpress.ui.dxToast>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxToast;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxToast";
  optionNames: string[] = ["accessKey", "animation", "closeOnClick", "closeOnOutsideClick", "closeOnSwipe", "contentTemplate", "deferRendering", "displayTime", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "message", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onShowing", "onShown", "position", "rtlEnabled", "shading", "shadingColor", "tabIndex", "type", "visible", "width"];

  @bindable accessKey?: string;
  @bindable animation?: any;
  @bindable closeOnClick?: boolean;
  @bindable closeOnOutsideClick?: boolean | Function;
  @bindable closeOnSwipe?: boolean;
  @bindable contentTemplate?: any;
  @bindable deferRendering?: boolean;
  @bindable displayTime?: number;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable maxHeight?: number | Function | string;
  @bindable maxWidth?: number | Function | string;
  @bindable message?: string;
  @bindable minHeight?: number | Function | string;
  @bindable minWidth?: number | Function | string;
  @bindable position?: DevExpress.positionConfig | string;
  @bindable rtlEnabled?: boolean;
  @bindable shading?: boolean;
  @bindable shadingColor?: string;
  @bindable tabIndex?: number;
  @bindable type?: string;
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
