import { FrameworkConfiguration } from "aurelia-framework";
import globalResources from "./global-resources";

export * from "./services/index";

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources(globalResources);
}