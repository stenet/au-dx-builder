import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxLoadPanel implements IDx<DevExpress.ui.dxLoadPanel>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxLoadPanel;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxLoadPanel";
  optionNames: string[] = ["animation", "closeOnOutsideClick", "container", "deferRendering", "delay", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "indicatorSrc", "maxHeight", "maxWidth", "message", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onShowing", "onShown", "position", "rtlEnabled", "shading", "shadingColor", "showIndicator", "showPane", "visible", "width"];

  @bindable animation?: any;
  @bindable closeOnOutsideClick?: boolean | Function;
  @bindable container?: Element;
  @bindable deferRendering?: boolean;
  @bindable delay?: number;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable indicatorSrc?: string;
  @bindable maxHeight?: number | Function | string;
  @bindable maxWidth?: number | Function | string;
  @bindable message?: string;
  @bindable minHeight?: number | Function | string;
  @bindable minWidth?: number | Function | string;
  @bindable position?: DevExpress.positionConfig | Function | string;
  @bindable rtlEnabled?: boolean;
  @bindable shading?: boolean;
  @bindable shadingColor?: string;
  @bindable showIndicator?: boolean;
  @bindable showPane?: boolean;
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