import { Scope } from "aurelia-framework";

export interface IDxOnValueChangedByUserArguments {
  sender: DevExpress.DOMComponent;
  model: Scope;
  optionName: string;
  value: any;
}