import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import {createCustomElement } from '@angular/elements'; 


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    const btn = createCustomElement(ButtonComponent, {injector})
    customElements.define('custom-button', btn)
}

ngDoBootStrap() {} 
}
