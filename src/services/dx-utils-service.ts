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
  convertToPascalCase(camelCase: string): string {
    return camelCase.substr(0, 1)
      .toUpperCase()
      .concat(camelCase.substr(1));
  }
}