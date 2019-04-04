import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxFilterBuilder implements IDx<DevExpress.ui.dxFilterBuilder>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxFilterBuilder;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxFilterBuilder";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowHierarchicalFields", "customOperations", "disabled", "elementAttr", "fields", "filterOperationDescriptions", "focusStateEnabled", "groupOperationDescriptions", "groupOperations", "height", "hint", "hoverStateEnabled", "maxGroupLevel", "onContentReady", "onDisposing", "onEditorPrepared", "onEditorPreparing", "onInitialized", "onOptionChanged", "onValueChanged", "rtlEnabled", "tabIndex", "value", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowHierarchicalFields?: boolean;
  @bindable customOperations?: DevExpress.ui.dxFilterBuilderCustomOperation[];
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable fields?: DevExpress.ui.dxFilterBuilderField[];
  @bindable filterOperationDescriptions?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable groupOperationDescriptions?: any;
  @bindable groupOperations?: string[];
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable maxGroupLevel?: number;
  @bindable rtlEnabled?: boolean;
  @bindable tabIndex?: number;
  @bindable value?: any;
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