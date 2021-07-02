import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxDateBox implements IDx<DevExpress.ui.dxDateBox>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxDateBox;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxDateBox";
  optionNames: string[] = ["acceptCustomValue", "accessKey", "activeStateEnabled", "adaptivityEnabled", "applyButtonText", "applyValueMode", "buttons", "calendarOptions", "cancelButtonText", "dateOutOfRangeMessage", "dateSerializationFormat", "deferRendering", "disabled", "disabledDates", "displayFormat", "dropDownButtonTemplate", "dropDownOptions", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "interval", "invalidDateMessage", "isValid", "max", "maxLength", "min", "name", "onChange", "onClosed", "onContentReady", "onCopy", "onCut", "onDisposing", "onEnterKey", "onFocusIn", "onFocusOut", "onInitialized", "onInput", "onKeyDown", "onKeyPress", "onKeyUp", "onOpened", "onOptionChanged", "onPaste", "onValueChanged", "opened", "openOnFieldClick", "pickerType", "placeholder", "readOnly", "rtlEnabled", "showAnalogClock", "showClearButton", "showDropDownButton", "spellcheck", "stylingMode", "tabIndex", "text", "type", "useMaskBehavior", "validationError", "validationErrors", "validationMessageMode", "validationStatus", "value", "valueChangeEvent", "visible", "width"];

  @bindable acceptCustomValue?: boolean;
  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable adaptivityEnabled?: boolean;
  @bindable applyButtonText?: string;
  @bindable applyValueMode?: string;
  @bindable buttons?: string[] | DevExpress.ui.dxTextEditorButton[];
  @bindable calendarOptions?: DevExpress.ui.dxCalendarOptions;
  @bindable cancelButtonText?: string;
  @bindable dateOutOfRangeMessage?: string;
  @bindable dateSerializationFormat?: string;
  @bindable deferRendering?: boolean;
  @bindable disabled?: boolean;
  @bindable disabledDates?: Date[];
  @bindable displayFormat?: DevExpress.ui.format | string;
  @bindable dropDownButtonTemplate?: any;
  @bindable dropDownOptions?: DevExpress.ui.dxPopupOptions;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable interval?: number;
  @bindable invalidDateMessage?: string;
  @bindable isValid?: boolean;
  @bindable max?: Date | number | string;
  @bindable maxLength?: number | string;
  @bindable min?: Date | number | string;
  @bindable name?: string;
  @bindable opened?: boolean;
  @bindable openOnFieldClick?: boolean;
  @bindable pickerType?: string;
  @bindable placeholder?: string;
  @bindable readOnly?: boolean;
  @bindable rtlEnabled?: boolean;
  @bindable showAnalogClock?: boolean;
  @bindable showClearButton?: boolean;
  @bindable showDropDownButton?: boolean;
  @bindable spellcheck?: boolean;
  @bindable stylingMode?: string;
  @bindable tabIndex?: number;
  @bindable text?: string;
  @bindable type?: string;
  @bindable useMaskBehavior?: boolean;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationMessageMode?: string;
  @bindable validationStatus?: string;
  @bindable value?: Date | number | string;
  @bindable valueChangeEvent?: string;
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