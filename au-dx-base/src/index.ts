import { FrameworkConfiguration } from "aurelia-framework";
import globalResources from "./global-resources";

import "devextreme/dist/css/dx.common.css";

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources(globalResources);
}