import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string="Data From Parent...";

  NumData:number=9;

  jsonobj={
    name:"Sumit Raokhande",
    id:9,
    role:'Developer'
  }

  status:boolean;

  constructor() { }

  ngOnInit() {
  }

  OnClick(){
    this.status=true;
  }

}
