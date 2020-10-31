import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxPopup implements IDx<DevExpress.ui.dxPopup>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxPopup;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxPopup";
  optionNames: string[] = ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "deferRendering", "disabled", "dragEnabled", "elementAttr", "focusStateEnabled", "fullScreen", "height", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width"];

  @bindable accessKey?: string;
  @bindable animation?: any;
  @bindable closeOnOutsideClick?: boolean | Function;
  @bindable container?: Element | string;
  @bindable contentTemplate?: any;
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable dragEnabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable fullScreen?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable maxHeight?: number | Function | string;
  @bindable maxWidth?: number | Function | string;
  @bindable minHeight?: number | Function | string;
  @bindable minWidth?: number | Function | string;
  @bindable position?: DevExpress.positionConfig | Function | string;
  @bindable resizeEnabled?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable shading?: boolean;
  @bindable shadingColor?: string;
  @bindable showCloseButton?: boolean;
  @bindable showTitle?: boolean;
  @bindable tabIndex?: number;
  @bindable title?: string;
  @bindable titleTemplate?: any;
  @bindable toolbarItems?: any[];
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