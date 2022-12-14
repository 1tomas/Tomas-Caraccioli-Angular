import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrumaAboutComponent } from './bruma-about/bruma-about.component';
import { BrumaProductsComponent } from './bruma-products/bruma-products.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { ValueIntegerComponent } from './value-integer/value-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BrumaAboutComponent,
    BrumaProductsComponent,
    CartComponent,
    ValueIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
