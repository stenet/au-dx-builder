import { Container } from "aurelia-framework";
import { IDxElement } from "./dx-element";
import { DxWidgetService } from "../services/dx-widget-service";

export class DxValidation {
  constructor() {}

  attachValidation(dxElement: IDxElement) {
    const dxWidgetService = Container.instance.get(DxWidgetService);

    if (dxElement.validatorOptions) {
      dxElement.validatorInstance = dxWidgetService.createInstance(
        "dxValidator",
        dxElement.widgetElement!,
        dxElement.validatorOptions);
    } else if (dxElement.widgetOptions && dxElement.widgetOptions!["validators"]) {
      dxElement.validatorInstance = dxWidgetService.createInstance(
        "dxValidator",
        dxElement.widgetElement!, {
          validationRules: dxElement.widgetOptions!["validators"]
        });
    } else if (Array.isArray(dxElement["validationRules"])) {
      dxElement.validatorInstance = dxWidgetService.createInstance(
        "dxValidator",
        dxElement.widgetElement!, {
          validationRules: dxElement["validationRules"]
        });
    }
  }
  dispose() {

  }
}