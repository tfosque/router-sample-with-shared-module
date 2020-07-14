import { Component, OnInit } from '@angular/core';
import { NotificationService, Notice } from '../services/notification.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public notice = new BehaviorSubject<Notice>({show: false, msg: '', emphasis: '', });

  constructor(
    private readonly notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.notificationService.notification.subscribe((notice: Notice) => {
      // console.log('notifi:service', {notice});
      // console.log('this:', this.notice);


      this.notice.next(notice);
    });
  }

}
