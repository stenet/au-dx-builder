import { IDxOnValueChangedByUserArguments } from "./dx-value-changed-by-user-arguments";
import { Scope } from "aurelia-framework";

export interface IDxOptions {
  [key: string]: any;
  bindingOptions?: { 
    [key: string]: string 
  };
  integrationOptions?: {
    templates: {
      [key: string]: {
        render: (renderData: any) => Element
      }
    }
  };

  modelByElement?(element: Element): Scope;
  onValueChangedByUser?(args: IDxOnValueChangedByUserArguments): void;
}