# au-dx-builder

## Introduction

Scripts for creating a Aurelia-DevExtreme plugin. The scripts are using the metadata.json from DevExpress, they are 
using for their Angular implementation.
The plugin is published to npmjs.

## Using

Create an Aurelia-App using the aurelia-cli.

```bash
au new
```

Install aurelia-devextreme-bridge
```bash
npm i aurelia-devextreme-bridge devextreme -S
```

When using Aurelia's built in bundler you have to modify aurelia.json (at least I don't know how to get work without it). When using Webpack it just works. You don't have to do nothing ;-)

```json
{
  "build": {
    "bundles": [
      {
        "name": "vendor-bundle.js",
        "prepend": [
          "node_modules/jszip/dist/jszip.js",
          "node_modules/devextreme/dist/js/dx.all.js"
          "require ..."
        ]
      }
    ],
    "copyFiles": {
      "node_modules/devextreme/dist/css/icons/*": "icons"
    }
  }
}
```

In your main.ts add the desired theme and register the plugin within Aurelia. 
As configuration you have to pass the specific widget-loader.

- global-loader: when using the built-in loader "aurelia-devextreme-bridge/dist/commonjs/global-loader"
- require-loader: when module loader is webpack "aurelia-devextreme-bridge/dist/commonjs/require-loader"

```javascript
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

//import loader from "aurelia-devextreme-bridge/dist/commonjs/global-loader";
//import loader from "aurelia-devextreme-bridge/dist/commonjs/require-loader";

aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName("aurelia-devextreme-bridge"), {
      loader: loader
    });
```

Now you can make use of the dx-widgets.

```html
<dx-text-box value.two-way="myTextProperty"></dx-text-box>
```

or in a general way
```html
<dx widget-name="dxTextBox" widget-options.bind="textBoxOptions"></dx>
```
```typescript
currentValue = "test";
textBoxOptions: DevExpress.ui.dxTextBoxOptions = {
  bindingOptions: {
    value: "currentValue"
  }
};
```


Here you can find some examples: [https://github.com/stenet/au-dx-builder/tree/master/dev-app](https://github.com/stenet/au-dx-builder/tree/master/dev-app)

## Pricing/License DevExtreme

Please find these information on [https://js.devexpress.com/Buy/](https://js.devexpress.com/Buy/). While writing this, DevExtreme can be used for free in non-commercial projects [huhu :-)]
