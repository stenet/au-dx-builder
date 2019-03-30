import { IDxOptions } from "./dx-options";

export interface IDxBase {
  setOption(propertyName: string, value: any): void;
  setOptions: (options: IDxOptions) => void;

  resetValidation(): void;
  validate(): void;
}
export interface IDx<T extends DevExpress.DOMComponent> extends IDxBase {
  instance: T;
}