import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notice {
  show: boolean;
  msg: string;
  emphasis: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification = new BehaviorSubject<Notice>({show: false, msg: '', emphasis: ''});

  constructor() { }

  createNotification(notice: Notice) {
    console.log({notice});

    this.notification.next(notice);
  }
}
