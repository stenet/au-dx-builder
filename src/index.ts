import { FrameworkConfiguration } from "aurelia-framework";
import globalResources from "./global-resources";
import { DxWidgetService } from "./services/export";

export * from "./services/export";
export * from "./base/export";

export function configure(aurelia: FrameworkConfiguration, config: any) {
  aurelia.globalResources(globalResources);

  const widgetService: DxWidgetService = aurelia.container.get(DxWidgetService);
  widgetService.registerLoader(config.loader);
}