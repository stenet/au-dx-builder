import * as gulp from "gulp";
import * as fs from "fs";
import * as utils from "./utils";
import * as metadata from "./metadata";

const basePath = __dirname.concat("/../../..");
const srcPath = basePath.concat("/src");
const elementsPath = srcPath.concat("/elements");

function getMetadata(): metadata.IMetadata {
  const path = __dirname.concat("/../../../metadata.json");
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
function createWidget(widgetName: string, config: metadata.IWidgetConfig) {
  const widgetNameDashed = utils.toDashCase(widgetName);
  const widgetNamePascal = utils.toPascalCase(widgetName);
  
  let content = getClassTemplate();
  content = content.replace(/#classname#/g, widgetNamePascal);
  content = content.replace(/#widgetName#/g, widgetName);

  const moduleArr = config.Module.split("/");
  const instanceType = "DevExpress.".concat(moduleArr[0]).concat(".").concat(widgetName);
  content = content.replace(/#instancetype#/g, instanceType);

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

  if (config.Module.startsWith("ui/") && !widgetName.startsWith("dxValidat")) {
    options.push("  @bindable validationRules?: any[];")
  }

  content = content.replace(/#options#/g, options.join("\n"));
  content = content.replace(/#optionNames#/g, optionNames.join(", "));

  const widgetPath = elementsPath.concat("/").concat(widgetNameDashed).concat(".ts");
  fs.writeFileSync(widgetPath, content, "utf8");
}
export function createWidgets(done: {(): void}) {
  const metadata = getMetadata();
  const reqModules: string[] = [];
  const dxModules: string[] = [];
  const globalResources: string[] = [];

  for (let widgetName in metadata.Widgets) { 
    reqModules.push("  result."
      .concat(widgetName)
      .concat(" = require(\"devextreme/")
      .concat(metadata.Widgets[widgetName].Module)
      .concat("\");"));

    dxModules.push("  result."
    .concat(widgetName)
    .concat(" = dx.")
    .concat(metadata.Widgets[widgetName].Module.split("/")[0])
    .concat(".")
    .concat(widgetName)
    .concat(";"));

    globalResources.push("globalResources.push(PLATFORM.moduleName(\""
      .concat("./elements/")
      .concat(utils.toDashCase(widgetName))
      .concat("\"));"));

    createWidget(widgetName, metadata.Widgets[widgetName]);
  }

  let loader = getLoaderTemplate();
  loader = loader.replace(/#reqmodules#/g, reqModules.join("\n"));
  loader = loader.replace(/#dxmodules#/g, dxModules.join("\n"));

  const loaderPath = srcPath.concat("/loader.ts");
  fs.writeFileSync(loaderPath, loader, "utf8");

  let globalResource = getGlobalResourcesTemplate();
  globalResource = globalResource.replace(/#globalresources#/g, globalResources.join("\n"));
  
  const globalResourcePath = srcPath.concat("/global-resources.ts");
  fs.writeFileSync(globalResourcePath, globalResource);

  done();
}