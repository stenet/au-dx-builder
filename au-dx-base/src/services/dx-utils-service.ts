import { autoinject } from "aurelia-framework";

@autoinject
export class DxUtilsService {
  constructor() {}

  convertToDashCase(camelCase: string): string {
    return camelCase.split("").reduce((p, c) => {
      if (c === c.toUpperCase()) {
        p += "-".concat(c.toLowerCase());
      } else {
        p += c;
      }

      return p;
    }, "");
  }
}