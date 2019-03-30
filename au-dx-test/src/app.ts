import { autoinject } from "aurelia-framework";

@autoinject
export class App {
  myName = "Max Mustermann";
  popupVisible = false;

  data = [
    { firstName: "A", lastName: "A" },
    { firstName: "B", lastName: "B" },
    { firstName: "C", lastName: "C" }
  ];

  showPopupClick() {
    this.popupVisible = true;
  }
}
