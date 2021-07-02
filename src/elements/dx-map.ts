import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxMap implements IDx<DevExpress.ui.dxMap>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxMap;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxMap";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "apiKey", "autoAdjust", "center", "controls", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "key", "markerIconSrc", "markers", "onClick", "onDisposing", "onInitialized", "onMarkerAdded", "onMarkerRemoved", "onOptionChanged", "onReady", "onRouteAdded", "onRouteRemoved", "provider", "routes", "rtlEnabled", "tabIndex", "type", "visible", "width", "zoom"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable apiKey?: string;
  @bindable autoAdjust?: boolean;
  @bindable center?: number[];
  @bindable controls?: boolean;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable key?: string;
  @bindable markerIconSrc?: string;
  @bindable markers?: any[];
  @bindable provider?: string;
  @bindable routes?: any[];
  @bindable rtlEnabled?: boolean;
  @bindable tabIndex?: number;
  @bindable type?: string;
  @bindable visible?: boolean;
  @bindable width?: number | Function | string;
  @bindable zoom?: number;
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
