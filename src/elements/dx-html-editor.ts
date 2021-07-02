import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxHtmlEditor implements IDx<DevExpress.ui.dxHtmlEditor>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxHtmlEditor;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxHtmlEditor";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "customizeModules", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "isValid", "mediaResizing", "mentions", "name", "onContentReady", "onDisposing", "onFocusIn", "onFocusOut", "onInitialized", "onOptionChanged", "onValueChanged", "placeholder", "readOnly", "rtlEnabled", "stylingMode", "tabIndex", "toolbar", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "valueType", "variables", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable customizeModules?: Function;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable isValid?: boolean;
  @bindable mediaResizing?: DevExpress.ui.dxHtmlEditorMediaResizing;
  @bindable mentions?: DevExpress.ui.dxHtmlEditorMention[];
  @bindable name?: string;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable toolbar?: DevExpress.ui.dxHtmlEditorToolbar;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: any;
  @bindable valueType?: string;
  @bindable variables?: DevExpress.ui.dxHtmlEditorVariables;
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