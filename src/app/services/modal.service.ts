import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public header = new BehaviorSubject<string>('');
  public body = new BehaviorSubject<any>([]);

  // accept a ViewChild as footer elements
  public footer = new BehaviorSubject<any>([]);

  public open = new BehaviorSubject<boolean>(false);

  constructor() { }

  openModal() {
    this.open.next(true);
  }

  closeModal() {
    this.open.next(false);
  }
}
