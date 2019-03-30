import { autoinject } from "aurelia-framework";

@autoinject
export class App {
  myName = "Stefan";
  popupVisible = false;

  showPopupClick() {
    this.popupVisible = true;
  }
}
