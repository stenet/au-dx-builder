import { IDxOptionsBase } from "./dx-options";
import { Scope } from "aurelia-binding";

export interface IDxBase {  
  getOption(optionName: string): any;
  setOption(optionName: string, value: any): void;
  setOptions(options: IDxOptionsBase): void;

  resetValidation(): void;
  validate(): void;
}
export interface IDx<T extends DevExpress.DOMComponent> extends IDxBase {
  readonly element: Element,
  
  readonly scope?: Scope;
  readonly instance?: T;
  
  readonly widgetName?: string;
  readonly widgetElement?: Element;
}
