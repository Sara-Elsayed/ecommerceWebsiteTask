import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsListComponent} from './products-list/products-list.component'
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component' 

const routes: Routes = [
  {path:'', redirectTo : '/products-list', pathMatch:'full'},
  {path:'products-list' , component: ProductsListComponent},
  {path:'shopping-cart' , component: ShoppingCartComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
