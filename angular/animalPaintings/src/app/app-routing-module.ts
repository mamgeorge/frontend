import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Productlist } from './product/productlist/productlist';
import { Cartview } from './cart/cartview/cartview';

const routes: Routes = [

  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: Productlist },
  { path: 'cart', component: Cartview },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
