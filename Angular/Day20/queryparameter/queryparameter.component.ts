import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  DispData:string='';
  constructor(private route:ActivatedRoute,
    private notify:NotificationService
    ) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((queryparam)=>{
      console.log('First Name is :: '+queryparam.get("fname"));
      console.log('ID is :: '+queryparam.get("id"));
      console.log('Status is :: '+queryparam.get("status"));
    })

    this.notify.notificationSubject.subscribe((data)=>{
        this.DispData=data;
    })
  }

  onSend(inputvalue){
    this.notify.SendNotification(inputvalue.value);
  }

}
