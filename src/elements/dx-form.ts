import { autoinject, bindable, noView, processContent, Scope } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxForm implements IDx<DevExpress.ui.dxForm>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  scope?: Scope;
  instance?: DevExpress.ui.dxForm;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxForm";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "alignItemLabels", "alignItemLabelsInAllGroups", "colCount", "colCountByScreen", "customizeItem", "disabled", "elementAttr", "focusStateEnabled", "formData", "height", "hint", "hoverStateEnabled", "items", "labelLocation", "minColWidth", "onContentReady", "onDisposing", "onEditorEnterKey", "onFieldDataChanged", "onInitialized", "onOptionChanged", "optionalMark", "readOnly", "requiredMark", "requiredMessage", "rtlEnabled", "screenByWidth", "scrollingEnabled", "showColonAfterLabel", "showOptionalMark", "showRequiredMark", "showValidationSummary", "tabIndex", "validationGroup", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable alignItemLabels?: boolean;
  @bindable alignItemLabelsInAllGroups?: boolean;
  @bindable colCount?: number | string;
  @bindable colCountByScreen?: any;
  @bindable customizeItem?: Function;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable formData?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable items?: DevExpress.ui.dxFormSimpleItem[] | DevExpress.ui.dxFormGroupItem[] | DevExpress.ui.dxFormTabbedItem[] | DevExpress.ui.dxFormEmptyItem[] | DevExpress.ui.dxFormButtonItem[];
  @bindable labelLocation?: string;
  @bindable minColWidth?: number;
  @bindable optionalMark?: string;
  @bindable readOnly?: boolean;
  @bindable requiredMark?: string;
  @bindable requiredMessage?: string;
  @bindable rtlEnabled?: boolean;
  @bindable screenByWidth?: Function;
  @bindable scrollingEnabled?: boolean;
  @bindable showColonAfterLabel?: boolean;
  @bindable showOptionalMark?: boolean;
  @bindable showRequiredMark?: boolean;
  @bindable showValidationSummary?: boolean;
  @bindable tabIndex?: number;
  @bindable validationGroup?: string;
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
