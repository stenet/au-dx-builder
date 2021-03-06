import "core-js/stable";
import {Aurelia} from "aurelia-framework"
import environment from "./environment";
import {PLATFORM} from "aurelia-pal";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import loader from "resources/global-loader";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName("resources"), {
      loader: loader
    });

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
