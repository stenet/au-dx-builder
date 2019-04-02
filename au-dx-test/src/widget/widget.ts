import { autoinject } from "aurelia-framework";

@autoinject
export class Widget {
  constructor() {}
  
  currentValue = "text";
  textBoxOptions: DevExpress.ui.dxTextBoxOptions = {
    bindingOptions: {
      value: "currentValue"
    }
  }
}