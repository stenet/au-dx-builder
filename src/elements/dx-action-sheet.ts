import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxActionSheet implements IDx<DevExpress.ui.dxActionSheet>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxActionSheet;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxActionSheet";
  optionNames: string[] = ["cancelText", "dataSource", "disabled", "elementAttr", "height", "hint", "hoverStateEnabled", "itemHoldTimeout", "items", "itemTemplate", "onCancelClick", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onOptionChanged", "rtlEnabled", "showCancelButton", "showTitle", "target", "title", "usePopover", "visible", "width"];

  @bindable cancelText?: string;
  @bindable dataSource?: string[] | DevExpress.ui.dxActionSheetItem[] | any[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemHoldTimeout?: number;
  @bindable items?: string[] | any[];
  @bindable itemTemplate?: any;
  @bindable rtlEnabled?: boolean;
  @bindable showCancelButton?: boolean;
  @bindable showTitle?: boolean;
  @bindable target?: string | DevExpress.core.UserDefinedElement;
  @bindable title?: string;
  @bindable usePopover?: boolean;
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
