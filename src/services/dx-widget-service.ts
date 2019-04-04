import { autoinject } from "aurelia-framework";

@autoinject
export class DxWidgetService {
  private _loader: {};

  constructor() {}

  registerLoader(loader: any) {
    this._loader = loader;
  }
  createInstance<T = DevExpress.DOMComponent>(widget: string, element: Element, options: any): T {
    if (!element) {
      throw new Error("No element specified");
    }
  
    return new this._loader[widget](element, options);
  }
  exists(widget: string): boolean {
    return !!this._loader[widget];
  }
  getInstance<T = DevExpress.DOMComponent>(widget: string, element: Element): T | null {
    if (element == null) {
      return null;
    }
  
    return this._loader[widget].getInstance(element);
  }
  getDefinition(widget: string): any {
    return this._loader[widget];
  }
}