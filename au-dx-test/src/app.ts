import { autoinject } from "aurelia-framework";
import { IDx } from "au-dx-plugin/elements/dx-base";

@autoinject
export class App {
  myName = "Max Mustermann";
  popupVisible = false;

  data = [
    { firstName: "A", lastName: "A" },
    { firstName: "B", lastName: "B" },
    { firstName: "C", lastName: "C" }
  ];

  validationGroup: IDx<DevExpress.ui.dxValidationGroup>;

  onValidateClick() {
    this.validationGroup.instance.validate();
  }
  onShowPopupClick() {
    this.popupVisible = true;
  }
}
