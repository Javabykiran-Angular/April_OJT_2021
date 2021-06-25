import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course=["Angular 8","React Js","Embber Js","Vue Js","JSP"];

  arrobj=[
    {
      name:"Samsung",
      price:20000,
      quantity:1
    },
    {
      name:"Motorola",
      price:22000,
      quantity:1
    },
    {
      name:"OnePlus",
      price:25000,
      quantity:1
    },
    {
      name:"RealeMe",
      price:27000,
      quantity:1
    },
    {
      name:"Iphone",
      price:67000,
      quantity:1
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
