import { autoinject } from "aurelia-framework";

@autoinject
export class DxTemplateService {
  private _templates: ITemplate;
  
  constructor() {
    this._templates = {};
  }
  
  registerTemplate(key: string, template: Element) {
    if (template.tagName != "DX-TEMPLATE") {
      throw new Error(`Template ${key} muss als Root ein dx-template Element sein`)
    }
    
    this._templates[key] = template;
  }
  
  getTemplates(): ITemplate {
    return this._templates;
  }
}

interface ITemplate {
  [key: string]: Element;
}
