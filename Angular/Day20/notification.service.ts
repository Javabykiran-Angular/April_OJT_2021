import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // notificationSubject=new Subject<string>();

  notificationSubject=new BehaviorSubject<string>("Welcome");

  constructor() { }

  SendNotification(data){
    this.notificationSubject.next(data);
  }


}
