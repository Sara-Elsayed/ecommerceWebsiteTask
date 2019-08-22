import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './shared/services/productsService.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConfirmAddComponent } from './confirm-add/confirm-add.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './shared/nav/nav.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    ConfirmAddComponent,
    NavComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmAddComponent]
})
export class AppModule { }
