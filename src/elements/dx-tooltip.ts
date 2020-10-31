import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxTooltip implements IDx<DevExpress.ui.dxTooltip>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxTooltip;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxTooltip";
  optionNames: string[] = ["animation", "closeOnOutsideClick", "container", "contentTemplate", "deferRendering", "disabled", "elementAttr", "height", "hideEvent", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onShowing", "onShown", "position", "rtlEnabled", "shading", "shadingColor", "showEvent", "target", "visible", "width"];

  @bindable animation?: any;
  @bindable closeOnOutsideClick?: boolean | Function;
  @bindable container?: Element | string;
  @bindable contentTemplate?: any;
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hideEvent?: string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable maxHeight?: number | Function | string;
  @bindable maxWidth?: number | Function | string;
  @bindable minHeight?: number | Function | string;
  @bindable minWidth?: number | Function | string;
  @bindable position?: DevExpress.positionConfig | string;
  @bindable rtlEnabled?: boolean;
  @bindable shading?: boolean;
  @bindable shadingColor?: string;
  @bindable showEvent?: string;
  @bindable target?: Element | string;
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