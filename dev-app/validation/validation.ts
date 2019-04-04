import { autoinject } from "aurelia-framework";

@autoinject
export class Validation {
  constructor() {}

  validationGroup: any;

  onValidateClick() {
    this.validationGroup.instance.validate();
  }
}