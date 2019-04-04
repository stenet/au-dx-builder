import { IDxOptions } from "./dx-options";

export interface IDxBase {
  getOption(optionName: string): any;
  setOption(optionName: string, value: any): void;
  setOptions(options: IDxOptions): void;

  resetValidation(): void;
  validate(): void;
}
export interface IDx<T extends DevExpress.DOMComponent> extends IDxBase {
  instance?: T;
}