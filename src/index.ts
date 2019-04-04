import { FrameworkConfiguration } from "aurelia-framework";
import globalResources from "./global-resources";

export * from "./services/export";
export * from "./base/export";

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources(globalResources);
}