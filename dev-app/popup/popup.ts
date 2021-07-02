import { autoinject } from "aurelia-framework";

@autoinject
export class Popup {
  constructor() {}

  isVisible = false;
  isGlobalVisible = false;
  
  testGlobalTemplate = "binding in global template";
}
