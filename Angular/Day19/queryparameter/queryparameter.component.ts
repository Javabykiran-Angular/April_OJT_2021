import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((queryparam)=>{
      console.log('First Name is :: '+queryparam.get("fname"));
      console.log('ID is :: '+queryparam.get("id"));
      console.log('Status is :: '+queryparam.get("status"));
    })
  }

}
