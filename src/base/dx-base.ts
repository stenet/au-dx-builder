import { IDxOptionsBase } from "./dx-options";

export interface IDxBase {
  getOption(optionName: string): any;
  setOption(optionName: string, value: any): void;
  setOptions(options: IDxOptionsBase): void;

  resetValidation(): void;
  validate(): void;
}
export interface IDx<T extends DevExpress.DOMComponent> extends IDxBase {
  instance?: T;
}
