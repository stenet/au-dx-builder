import { autoinject } from "aurelia-framework";
import { IDx } from "../../src/index";

@autoinject
export class Validation {
  constructor() {}

  validationGroup: IDx<DevExpress.ui.dxValidationGroup>;

  onValidateClick() {
    this.validationGroup.instance.validate();
  }
}