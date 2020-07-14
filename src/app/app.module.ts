import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { NavComponent } from './nav/nav.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TemplatesComponent } from './templates/templates.component';
import { BreadCrumbsComponent } from './nav/bread-crumbs/bread-crumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NotificationComponent,
    NavComponent,
    ShoppingCartComponent,
    TemplatesComponent,
    BreadCrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
