import { Scope } from "aurelia-binding";
import { BindingEngine, Container } from "aurelia-framework";
import { IDxBinding } from "./dx-binding";
import { IDxElement } from "./dx-element";
import { IDxOptions } from "./dx-options";

export class DxOptionsBinding implements IDxBinding {
  private _dxElement: IDxElement;
  private _parentScope: Scope;
  private _bindingEngine: BindingEngine;
  private _disposables: {(): void}[] = [];

  prepare(dxElement: IDxElement, parentScope: Scope): void {
    this._dxElement = dxElement;
    this._parentScope = parentScope;
    this._bindingEngine = Container.instance.get(BindingEngine);
  }

  updateInitializeOptions(dxOptions: IDxOptions) {
    if (!this._dxElement.options) {
      return;
    }

    for (let optionName in this._dxElement.options) {
      if (optionName == "bindingOptions") {
        for (let bindingName in this._dxElement.options.bindingOptions) {
          const bindingExpression = this._dxElement.options.bindingOptions[bindingName];

          const value = this._bindingEngine
            .parseExpression(bindingExpression)
            .evaluate(this._parentScope);

            dxOptions[bindingName] = value;
        }
      } else {
        dxOptions[optionName] = this._dxElement.optionNames[optionName];
      }
    }
  }
  registerBindings(onOptionChanged: {(optionName: string, value: any)}): void {
    if (!this._dxElement.options) {
      return;
    }
    if (!this._dxElement.options.bindingOptions) {
      return;
    }

    for (let bindingName in this._dxElement.options.bindingOptions) {
      const bindingExpression = this._dxElement.options.bindingOptions[bindingName];

      const subscription = this._bindingEngine
        .expressionObserver(
          this.getBindingContext(bindingExpression, this._parentScope),
          bindingExpression
        )
        .subscribe((newVal) => {
          onOptionChanged(bindingName, newVal);
        });

      this._disposables.push(subscription.dispose);
    }
  }
  registerEvents() {
  }

  onOptionChanged(optionName: string, value: any) {
    if (!this._dxElement.options) {
      return;
    }
    if (!this._dxElement.options.bindingOptions) {
      return;
    }

    const bindingExpression = this._dxElement.options.bindingOptions[optionName];
    if (!bindingExpression) {
      return;
    }

    const expression = this._bindingEngine.parseExpression(bindingExpression);

    const currValue = expression.evaluate(this._parentScope);
    if (currValue == value) {
      return;
    }

    expression.assign(this._parentScope, value, <any>null);
  }

  dispose() {
    this._dxElement = null;

    this._disposables.forEach(d => d());
    this._disposables = [];
  }

  private getBindingContext(expression: string, parentScope: Scope) {
    let obj: any = this._bindingEngine!.parseExpression(expression);

    while (obj.object) {
      obj = obj.object;
    }

    if (obj.name in parentScope!.bindingContext) {
      return parentScope!.bindingContext;
    } else {
      let ov = parentScope!.overrideContext;

      while (ov) {
        if (obj.name in ov.bindingContext) {
          return ov.bindingContext;
        }

        ov = ov.parentOverrideContext;
      }
    }

    return parentScope!.bindingContext || parentScope!.overrideContext;
  }
}