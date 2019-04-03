import '@babel/polyfill';
import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";
//import "devextreme/dist/css/dx.material.orange.light.css";
import "normalize.css/normalize.css"

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('au-dx-plugin/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
