import { autoinject } from "aurelia-framework";
import { IDx } from "../au-dx-plugin/elements/dx-base";

@autoinject
export class Validation {
  constructor() {}

  validationGroup: IDx<DevExpress.ui.dxValidationGroup>;

  onValidateClick() {
    this.validationGroup.instance.validate();
  }
}