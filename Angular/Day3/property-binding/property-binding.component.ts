import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  name:string="Sumit Raokhande";
  ImgUrl:string='../../assets/bg.jpeg';
  ishidden:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
