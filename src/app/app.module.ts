import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './modules/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BreadCrumbsComponent } from './nav/bread-crumbs/bread-crumbs.component';
import { IndexComponent } from './index/index.component';
import { LineItemComponent } from './line-item/line-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BreadCrumbsComponent,
    IndexComponent,
    LineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
