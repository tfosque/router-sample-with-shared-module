import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  open = false;

  constructor(
    private readonly modalService: ModalService,
    private readonly notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.modalService.open.subscribe(isOpen => {
      this.open = isOpen;
    });
  }

  closeModal() {
    this.modalService.closeModal();
    this.notificationService.createNotification({
      show: true,
      msg: 'It works!!!',
      emphasis: 'success'
    });
  }

}
