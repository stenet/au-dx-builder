import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxLookup implements IDx<DevExpress.ui.dxLookup>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxLookup;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxLookup";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "animation", "applyButtonText", "applyValueMode", "cancelButtonText", "cleanSearchOnOpening", "clearButtonText", "closeOnOutsideClick", "dataSource", "deferRendering", "disabled", "displayExpr", "displayValue", "elementAttr", "fieldTemplate", "focusStateEnabled", "fullScreen", "grouped", "groupTemplate", "height", "hint", "hoverStateEnabled", "inputAttr", "isValid", "items", "itemTemplate", "minSearchLength", "name", "nextButtonText", "noDataText", "onClosed", "onContentReady", "onDisposing", "onInitialized", "onItemClick", "onOpened", "onOptionChanged", "onPageLoading", "onPullRefresh", "onScroll", "onSelectionChanged", "onTitleRendered", "onValueChanged", "opened", "pageLoadingText", "pageLoadMode", "placeholder", "popupHeight", "popupWidth", "position", "pulledDownText", "pullingDownText", "pullRefreshEnabled", "refreshingText", "rtlEnabled", "searchEnabled", "searchExpr", "searchMode", "searchPlaceholder", "searchTimeout", "selectedItem", "shading", "showCancelButton", "showClearButton", "showDataBeforeSearch", "showPopupTitle", "stylingMode", "tabIndex", "text", "title", "titleTemplate", "useNativeScrolling", "usePopover", "validationError", "validationMessageMode", "value", "valueChangeEvent", "valueExpr", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable animation?: any;
  @bindable applyButtonText?: string;
  @bindable applyValueMode?: string;
  @bindable cancelButtonText?: string;
  @bindable cleanSearchOnOpening?: boolean;
  @bindable clearButtonText?: string;
  @bindable closeOnOutsideClick?: boolean | Function;
  @bindable dataSource?: DevExpress.ui.CollectionWidgetItem[] | any[];
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable displayExpr?: Function | string;
  @bindable displayValue?: string;
  @bindable elementAttr?: any;
  @bindable fieldTemplate?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable fullScreen?: boolean;
  @bindable grouped?: boolean;
  @bindable groupTemplate?: any;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable isValid?: boolean;
  @bindable items?: any[];
  @bindable itemTemplate?: any;
  @bindable minSearchLength?: number;
  @bindable name?: string;
  @bindable nextButtonText?: string;
  @bindable noDataText?: string;
  @bindable opened?: boolean;
  @bindable pageLoadingText?: string;
  @bindable pageLoadMode?: string;
  @bindable placeholder?: string;
  @bindable popupHeight?: number | Function | string;
  @bindable popupWidth?: number | Function | string;
  @bindable position?: DevExpress.positionConfig;
  @bindable pulledDownText?: string;
  @bindable pullingDownText?: string;
  @bindable pullRefreshEnabled?: boolean;
  @bindable refreshingText?: string;
  @bindable rtlEnabled?: boolean;
  @bindable searchEnabled?: boolean;
  @bindable searchExpr?: Function[];
  @bindable searchMode?: string;
  @bindable searchPlaceholder?: string;
  @bindable searchTimeout?: number;
  @bindable selectedItem?: any;
  @bindable shading?: boolean;
  @bindable showCancelButton?: boolean;
  @bindable showClearButton?: boolean;
  @bindable showDataBeforeSearch?: boolean;
  @bindable showPopupTitle?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable title?: string;
  @bindable titleTemplate?: any;
  @bindable useNativeScrolling?: boolean;
  @bindable usePopover?: boolean;
  @bindable validationError?: any;
  @bindable validationMessageMode?: string;
  @bindable value?: any;
  @bindable valueChangeEvent?: string;
  @bindable valueExpr?: Function | string;
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