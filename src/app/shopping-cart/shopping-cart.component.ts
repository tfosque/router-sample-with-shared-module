import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalService.openModal();
  }

}
