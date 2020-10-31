import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxFileUploader implements IDx<DevExpress.ui.dxFileUploader>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxFileUploader;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxFileUploader";
  optionNames: string[] = ["abortUpload", "accept", "accessKey", "activeStateEnabled", "allowCanceling", "allowedFileExtensions", "chunkSize", "disabled", "elementAttr", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "inputAttr", "invalidFileExtensionMessage", "invalidMaxFileSizeMessage", "invalidMinFileSizeMessage", "isValid", "labelText", "maxFileSize", "minFileSize", "multiple", "name", "onContentReady", "onDisposing", "onInitialized", "onOptionChanged", "onProgress", "onUploadAborted", "onUploaded", "onUploadError", "onUploadStarted", "onValueChanged", "progress", "readOnly", "readyToUploadMessage", "rtlEnabled", "selectButtonText", "showFileList", "tabIndex", "uploadButtonText", "uploadChunk", "uploadedMessage", "uploadFailedMessage", "uploadFile", "uploadHeaders", "uploadMethod", "uploadMode", "uploadUrl", "validationError", "validationErrors", "validationStatus", "value", "visible", "width"];

  @bindable abortUpload?: Function;
  @bindable accept?: string;
  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowCanceling?: boolean;
  @bindable allowedFileExtensions?: string[];
  @bindable chunkSize?: number;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable inputAttr?: any;
  @bindable invalidFileExtensionMessage?: string;
  @bindable invalidMaxFileSizeMessage?: string;
  @bindable invalidMinFileSizeMessage?: string;
  @bindable isValid?: boolean;
  @bindable labelText?: string;
  @bindable maxFileSize?: number;
  @bindable minFileSize?: number;
  @bindable multiple?: boolean;
  @bindable name?: string;
  @bindable progress?: number;
  @bindable readOnly?: boolean;
  @bindable readyToUploadMessage?: string;
  @bindable rtlEnabled?: boolean;
  @bindable selectButtonText?: string;
  @bindable showFileList?: boolean;
  @bindable tabIndex?: number;
  @bindable uploadButtonText?: string;
  @bindable uploadChunk?: Function;
  @bindable uploadedMessage?: string;
  @bindable uploadFailedMessage?: string;
  @bindable uploadFile?: Function;
  @bindable uploadHeaders?: any;
  @bindable uploadMethod?: string;
  @bindable uploadMode?: string;
  @bindable uploadUrl?: string;
  @bindable validationError?: any;
  @bindable validationErrors?: any[];
  @bindable validationStatus?: string;
  @bindable value?: any[];
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