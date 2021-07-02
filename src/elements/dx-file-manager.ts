import { autoinject, bindable, noView, processContent } from "aurelia-framework";
import { DxCreator } from "../base/dx-creator";
import { IDx } from "../base/dx-base";
import { IDxElement } from "../base/dx-element";

@autoinject
@noView
@processContent(false)
export class DxFileManager implements IDx<DevExpress.ui.dxFileManager>, IDxElement {
  private _creator: any;

  constructor(
    public element: Element
  ) {
    this._creator = new DxCreator(this);
  }

  instance?: DevExpress.ui.dxFileManager;
  validatorInstance?: DevExpress.ui.dxValidator;

  widgetElement?: Element;

  widgetName = "dxFileManager";
  optionNames: string[] = ["accessKey", "activeStateEnabled", "allowedFileExtensions", "contextMenu", "currentPath", "currentPathKeys", "customizeDetailColumns", "customizeThumbnail", "disabled", "elementAttr", "fileSystemProvider", "focusedItemKey", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "itemView", "notifications", "onContentReady", "onContextMenuItemClick", "onContextMenuShowing", "onCurrentDirectoryChanged", "onDisposing", "onErrorOccurred", "onFocusedItemChanged", "onInitialized", "onOptionChanged", "onSelectedFileOpened", "onSelectionChanged", "onToolbarItemClick", "permissions", "rootFolderName", "rtlEnabled", "selectedItemKeys", "selectionMode", "tabIndex", "toolbar", "upload", "visible", "width"];

  @bindable accessKey?: string;
  @bindable activeStateEnabled?: boolean;
  @bindable allowedFileExtensions?: string[];
  @bindable contextMenu?: DevExpress.ui.dxFileManagerContextMenu;
  @bindable currentPath?: string;
  @bindable currentPathKeys?: string[];
  @bindable customizeDetailColumns?: Function;
  @bindable customizeThumbnail?: Function;
  @bindable disabled?: boolean;
  @bindable elementAttr?: any;
  @bindable fileSystemProvider?: any;
  @bindable focusedItemKey?: string;
  @bindable focusStateEnabled?: boolean;
  @bindable height?: number | Function | string;
  @bindable hint?: string;
  @bindable hoverStateEnabled?: boolean;
  @bindable itemView?: any;
  @bindable notifications?: any;
  @bindable permissions?: any;
  @bindable rootFolderName?: string;
  @bindable rtlEnabled?: boolean;
  @bindable selectedItemKeys?: string[];
  @bindable selectionMode?: string;
  @bindable tabIndex?: number;
  @bindable toolbar?: DevExpress.ui.dxFileManagerToolbar;
  @bindable upload?: any;
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