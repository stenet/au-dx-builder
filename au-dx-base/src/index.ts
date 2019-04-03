import { FrameworkConfiguration } from "aurelia-framework";
import globalResources from "./global-resources";

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources(globalResources);
}