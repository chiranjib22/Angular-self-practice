import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { Catalog } from './catalog/catalog';
import { ProductDetails } from './product-details/product-details';

@NgModule({
  declarations: [App, Header, Home, Catalog, ProductDetails],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
