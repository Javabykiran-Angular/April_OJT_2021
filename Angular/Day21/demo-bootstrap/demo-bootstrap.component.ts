import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  arrobj=[
    {
      product:'samsung',
      quantity:1,
      price:15000
    },
    {
      product:'OnePlus',
      quantity:1,
      price:45000
    },
    {
      product:'Realme',
      quantity:1,
      price:25000
    },
    {
      product:'Apple',
      quantity:1,
      price:75000
    },
    {
      product:'Motorolla',
      quantity:1,
      price:25000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
