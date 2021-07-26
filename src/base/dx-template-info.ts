import { Scope, createOverrideContext } from "aurelia-binding";
import { TemplatingEngine, Container } from "aurelia-framework";
import { DxTemplateService } from "../services/dx-template-service";

export class DxTemplateInfo {
  private _templatingEngine: TemplatingEngine;
  private _dxTemplateService: DxTemplateService;

  constructor(
    private _owningView: any,
    private _parentScope: Scope,
    private _element: Element,
    private _onTemplateRendered: TemplateRendered
  ) {
    this._templatingEngine = Container.instance.get(TemplatingEngine);
    this._dxTemplateService = Container.instance.get(DxTemplateService);
    
    this.copyGlobalTemplates();
  }

  templateDic: ITemplateDic = {};

  extractTemplates(): void {
    const children = Array.from(this._element.children)
      .filter(child => child.tagName === "DX-TEMPLATE");

    for (let child of children) {
      const name = child.getAttribute("name");
      if (!name) {
        continue;
      }
      
      this.addTemplate(name, child);
      this._element.removeChild(child);
    }
  }

  private copyGlobalTemplates() {
    const templates = this._dxTemplateService.getTemplates();
    
    for (const key in templates) {
      const element = templates[key];
      
      this.addTemplate(key, element);
    }
  }
  private addTemplate(name: string, element: Element) {
    const render = this.createRender(element, name);
    this.templateDic[name] = {
      render
    };
  }
  private createRender(element: Element, templateName: string): Render {
    return (renderData) => {
      return this.render(
        element,
        renderData.container,
        renderData.model,
        templateName
      );
    }
  }
  private render(element: Element, container: Element, model?: any, templateName?: string): Element {
    let newElement = <Element>element.cloneNode(true);

    container.appendChild(newElement);

    let itemBindingContext: any;
    let itemOverrideContext: any;

    if (model) {
      itemBindingContext = {
        data: model
      };

      itemOverrideContext = createOverrideContext(
        this._parentScope.bindingContext,
        this._parentScope.overrideContext);
    } else {
      itemBindingContext = this._parentScope.bindingContext;
      itemOverrideContext = this._parentScope.overrideContext;
    }

    const view = this._templatingEngine.enhance({
      element: newElement,
      bindingContext: itemBindingContext,
      overrideContext: itemOverrideContext,
      resources: this._owningView.resources
    });

    const dxEventOn: any = DevExpress.events.on;
    dxEventOn(<any>newElement, "dxremove", () => {
      view.detached();
      view.unbind();
    });

    this._onTemplateRendered(templateName, newElement);
    return newElement;
  }
}

type Render = (renderData: any) => Element;
type TemplateRendered = (templateName: string, element: Element) => void;

interface ITemplateDic {
  [key: string]: {
    render: Render
  }
}
