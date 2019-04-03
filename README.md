# au-dx-builder

## Introduction

Scripts for creating a Aurelia-DevExtreme plugin. The scripts are using the metadata.json from DevExpress, they are 
using for their Angular implementation.
The plugin is published to npmjs.

## Using

Create an Aurelia-App using the aurelia-cli and webpack (others not tested at the moment).

```bash
au new
```

Install aurelia-devextreme-bridge
```bash
npm i aurelia-devextreme-bridge -S
```

In your main.ts add the desired theme and register the plugin within Aurelia.
```javascript
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName("aurelia-devextreme-bridge"));
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


Here you can find some examples: [https://github.com/stenet/au-dx-builder/tree/master/au-dx-test](https://github.com/stenet/au-dx-builder/tree/master/au-dx-test)

## Pricing/License DevExtreme

Please find these information on [https://js.devexpress.com/Buy/](https://js.devexpress.com/Buy/). While writing this, DevExtreme can be used for free in non-commercial projects.
