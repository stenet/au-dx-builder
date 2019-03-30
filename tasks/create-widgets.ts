import * as gulp from "gulp";
import * as fs from "fs";
import * as utils from "./utils";
import * as metadata from "./metadata";

const basePath = __dirname.concat("/..");
const pluginPath = basePath.concat("/au-dx-plugin");
const srcPath = pluginPath.concat("/src");
const elementsPath = srcPath.concat("/elements");

function getMetadata(): metadata.IMetadata {
  const path = __dirname.concat("/../metadata.json");
  const content = fs.readFileSync(path, "utf8");
  return JSON.parse(content);
}
function getClassTemplate(): string {
  const path = __dirname.concat("/templates/class.txt");
  return fs.readFileSync(path, "utf8");
}
function getGlobalResourcesTemplate(): string {
  const path = __dirname.concat("/templates/global-resources.txt");
  return fs.readFileSync(path, "utf8");
}
function getLoaderTemplate(): string {
  const path = __dirname.concat("/templates/loader.txt");
  return fs.readFileSync(path, "utf8");
}
function createWidgets() {
  const metadata = getMetadata();
  const modules: string[] = [];
  const globalResources: string[] = [];

  for (let widgetName in metadata.Widgets) { 
    modules.push("result."
      .concat(widgetName)
      .concat(" = require(\"devextreme/")
      .concat(metadata.Widgets[widgetName].Module)
      .concat("\");"));

    globalResources.push("globalResources.push(PLATFORM.moduleName(\""
      .concat("./elements/")
      .concat(utils.toDashCase(widgetName))
      .concat("\"));"));

    createWidget(widgetName, metadata.Widgets[widgetName]);
  }

  let loader = getLoaderTemplate();
  loader = loader.replace("#modules#", modules.join("\n"));

  const loaderPath = srcPath.concat("/loader.ts");
  fs.writeFileSync(loaderPath, loader, "utf8");

  let globalResource = getGlobalResourcesTemplate();
  globalResource = globalResource.replace("#globalresources#", globalResources.join("\n"));
  
  const globalResourcePath = srcPath.concat("/global-resources.ts");
  fs.writeFileSync(globalResourcePath, globalResource);
}
function createWidget(widgetName: string, config: metadata.IWidgetConfig) {
  const widgetNameDashed = utils.toDashCase(widgetName);
  const widgetNamePascal = utils.toPascalCase(widgetName);
  
  let content = getClassTemplate();
  content = content.replace("#classname#", widgetNamePascal);
  content = content.replace("#widgetName#", widgetName);

  const moduleArr = config.Module.split("/");
  const instanceType = "DevExpress.".concat(moduleArr[0]).concat(".").concat(widgetName);
  content = content.replace("#instancetype#", instanceType);

  const options: string[] = [];
  const optionNames: string[] = [];
  for (let optionName in config.Options) {
    optionNames.push("\"".concat(optionName).concat("\""));
    
    const option = config.Options[optionName];

    const isEvent = optionName.length > 2
      && optionName.startsWith("on")
      && optionName.substr(2, 1) == optionName.substr(2, 1).toUpperCase();

    if (isEvent) {
      continue;
    }

    const types = option.ItemPrimitiveTypes 
      ? option.ItemPrimitiveTypes.map(t => t.concat("[]")).join(" | ")
      : (option.PrimitiveTypes 
        ? option.PrimitiveTypes.filter(t => t !== "JQuery").join(" | ")
        : "any");

    options.push("  @bindable ".concat(optionName).concat("?: ").concat(types).concat(";"));
  }

  content = content.replace("#options#", options.join("\n"));
  content = content.replace("#optionNames#", optionNames.join(", "));

  const widgetPath = elementsPath.concat("/").concat(widgetNameDashed).concat(".ts");
  fs.writeFileSync(widgetPath, content, "utf8");
}

gulp.task("create-widgets", done => {
  createWidgets();
  done();
});

