import { autoinject } from "aurelia-framework";

@autoinject
export class Simple {
  constructor() {}

  myText = "myText";
  myNumber = 1;
  myDate = new Date();
  myBoolean = true;
  myColor = "#EFEFEF";
  myRadioGroup = 2;

  onButtonClick() {
    DevExpress.ui.notify("Hello", "SUCCESS", 3000);
  }
}