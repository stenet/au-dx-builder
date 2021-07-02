import { IDxOnValueChangedByUserArguments } from "./dx-value-changed-by-user-arguments";
import { Scope } from "aurelia-framework";

export interface IDxOptionsBase {
  [key: string]: any;
  bindingOptions?: any;
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

type IDxOptions<T extends DevExpress.DOMComponentOptions> = IDxOptionsBase & T;
