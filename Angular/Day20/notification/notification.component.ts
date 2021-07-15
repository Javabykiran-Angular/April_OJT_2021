import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  NotificationMSG:string='';
  constructor(private notifier:NotificationService) { }

  ngOnInit() {
    this.notifier.notificationSubject.subscribe((data)=>{
        this.NotificationMSG=data;
    })
  }

}
