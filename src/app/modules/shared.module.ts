import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from '../notification/notification.component';
import { ModalComponent } from '../modal/modal.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    NotificationComponent,
    ModalComponent,
    ShoppingCartComponent,

  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NotificationComponent,
    ModalComponent,
    ShoppingCartComponent
  ]
})
export class SharedModule { }
