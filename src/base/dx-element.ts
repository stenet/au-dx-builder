import { IDxOptions } from "./dx-options";
import { OverrideContext } from "aurelia-binding";

export interface IDxElement {
  element: Element,
  widgetName: string;
  widgetOptions?: IDxOptions | null;
  widgetElement?: Element;
  instance?: DevExpress.DOMComponent | null;
  optionNames?: string[];
  validatorOptions?: DevExpress.ui.dxValidatorOptions;
  validatorInstance?: DevExpress.ui.dxValidator | null;

  created?(owningView: any): void;
  activated?(args: any): void;
  bind?(bindingContext: any, overrideContext: OverrideContext): void;
  attached?(): void;
  detached?(): void;
  unbind?(): void;
}