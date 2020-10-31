import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDraggable implements IDx<DevExpress.ui.dxDraggable>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxDraggable;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDraggable";
  optionNames: string[] = ["autoScroll", "boundary", "clone", "container", "cursorOffset", "data", "dragDirection", "dragTemplate", "elementAttr", "group", "handle", "height", "onDisposing", "onDragEnd", "onDragMove", "onDragStart", "onInitialized", "onOptionChanged", "rtlEnabled", "scrollSensitivity", "scrollSpeed", "width"];

  @bindable autoScroll?: boolean;
  @bindable boundary?: Element | string;
  @bindable clone?: boolean;
  @bindable container?: Element | string;
  @bindable cursorOffset?: string;
  @bindable data?: any;
  @bindable dragDirection?: string;
  @bindable dragTemplate?: any;
  @bindable elementAttr?: any;
  @bindable group?: string;
  @bindable handle?: string;
  @bindable height?: number | Function | string;
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