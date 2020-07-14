import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TemplatesComponent } from './templates/templates.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'templates', component: TemplatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
