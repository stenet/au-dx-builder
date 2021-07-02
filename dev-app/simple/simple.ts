import { autoinject } from "aurelia-framework";
import { IDx } from "resources/base/dx-base";

@autoinject
export class Simple {
  constructor() {}

  myText = "myText";
  myNumber = 1;
  myDate = new Date();
  myBoolean = true;
  myColor = "#EFEFEF";
  myRadioGroup = 2;

  textBox: IDx<DevExpress.ui.dxTextBox>;
  scopeInfo = "";

  attached() {
    const scope = this.textBox.scope;
  }

  onButtonClick() {
    DevExpress.ui.notify("Hello", "SUCCESS", 3000);
  }
  onTextBoxInitialized(e) {
    return;
  }
  onTextBoxValueChangedByUser(e) {
    console.log("on-value-changed-by-user fired");
  }
}
