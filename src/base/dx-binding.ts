import { Scope } from "aurelia-binding";
import { IDxElement } from "./dx-element";
import { IDxOptionsBase } from "./dx-options";

export interface IDxBinding {
  prepare(dxElement: IDxElement, parentScope: Scope): void;
  
  updateInitializeOptions(dxOptions: IDxOptionsBase): void;
  registerBindings(onOptionChanged: {(optionName: string, value: any)}): void;

  onOptionChanged(optionName: string, value: any): void;
  onTemplateRendered(templateName: string, element: Element): void;

  dispose(): void;
}
