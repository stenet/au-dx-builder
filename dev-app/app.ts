import { autoinject, Aurelia } from "aurelia-framework";
import { DxTemplateService } from "resources/services/dx-template-service";

@autoinject
export class App {
  constructor(
    private _aurelia: Aurelia,
    private _dxTemplateService: DxTemplateService
  ) {
    
    const template = document.createElement("dx-template");
    template.innerHTML = "<dx-text-box></dx-text-box><test-unbind-detach></test-unbind-detach><div>${testGlobalTemplate}</div>";
    
    this._dxTemplateService.registerTemplate(
      "globalPopupContentTemplate",
      template
    )
  }

  onResetRoot() {
    this._aurelia.setRoot("app");
  }
}
