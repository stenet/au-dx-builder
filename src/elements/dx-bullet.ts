import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxBullet implements IDx<DevExpress.viz.dxBullet>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.viz.dxBullet;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxBullet";
  optionNames: string[] = ["color", "disabled", "elementAttr", "endScaleValue", "margin", "onDisposing", "onDrawn", "onExported", "onExporting", "onFileSaving", "onIncidentOccurred", "onInitialized", "onOptionChanged", "onTooltipHidden", "onTooltipShown", "pathModified", "rtlEnabled", "showTarget", "showZeroLevel", "size", "startScaleValue", "target", "targetColor", "targetWidth", "theme", "tooltip", "value"];

  @bindable color?: string;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable endScaleValue?: number;
  @bindable margin?: any;
  @bindable pathModified?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showTarget?: boolean;
  @bindable showZeroLevel?: boolean;
  @bindable size?: any;
  @bindable startScaleValue?: number;
  @bindable target?: number;
  @bindable targetColor?: string;
  @bindable targetWidth?: number;
  @bindable theme?: string;
  @bindable tooltip?: any;
  @bindable value?: number;

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
