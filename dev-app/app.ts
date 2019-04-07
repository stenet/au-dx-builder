import { autoinject, Aurelia } from "aurelia-framework";

@autoinject
export class App {
  constructor(
    private _aurelia: Aurelia
  ) {}

  onResetRoot() {
    this._aurelia.setRoot("app");
  }
}
