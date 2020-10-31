import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxSortable implements IDx<DevExpress.ui.dxSortable>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxSortable;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxSortable";
  optionNames: string[] = ["allowDropInsideItem", "allowReordering", "autoScroll", "boundary", "container", "cursorOffset", "data", "dragDirection", "dragTemplate", "dropFeedbackMode", "elementAttr", "filter", "group", "handle", "height", "itemOrientation", "moveItemOnDrop", "onAdd", "onDisposing", "onDragChange", "onDragEnd", "onDragMove", "onDragStart", "onInitialized", "onOptionChanged", "onRemove", "onReorder", "rtlEnabled", "scrollSensitivity", "scrollSpeed", "width"];

  @bindable allowDropInsideItem?: boolean;
  @bindable allowReordering?: boolean;
  @bindable autoScroll?: boolean;
  @bindable boundary?: Element | string;
  @bindable container?: Element | string;
  @bindable cursorOffset?: string;
  @bindable data?: any;
  @bindable dragDirection?: string;
  @bindable dragTemplate?: any;
  @bindable dropFeedbackMode?: string;
  @bindable elementAttr?: any;
  @bindable filter?: string;
  @bindable group?: string;
  @bindable handle?: string;
  @bindable height?: number | Function | string;
  @bindable itemOrientation?: string;
  @bindable moveItemOnDrop?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable scrollSensitivity?: number;
  @bindable scrollSpeed?: number;
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