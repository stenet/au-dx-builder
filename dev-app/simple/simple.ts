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

  textBoxButtons: DevExpress.ui.dxTextEditorButton[] = [{
    location: "after",
    name: "hello",
    options: {
      icon: "home",
      elementAttr: {
        class: "text-editor__button__red"
      },
      stylingMode: "contained",
      onClick: () => {
        DevExpress.ui.notify("Hello", "success", 3000);
      }
    }
  }];

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