import { autoinject, noView } from "aurelia-framework";

@autoinject
@noView
export class TestUnbindDetach {
  bind() {
    return;
  }
  attached() {
    return;
  }
  detached() {
    return;
  }
  unbind() {
    return;
  }
}