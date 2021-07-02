import { Scope } from "aurelia-framework";

export interface IDxOnValueChangedByUserArguments {
  readonly sender: DevExpress.DOMComponent;
  readonly model: Scope;
  readonly optionName: string;
  readonly value: any;
}
