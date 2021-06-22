import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red';
  mystyle:string='italic';
  rating:number=21;

  jsonObj={
    color:"aqua",
    background:"blueviolet",
    fontFamily:"Courier New, Courier, monospace",
    "font-style":'italic'
  };


  constructor() { }

  ngOnInit() {
  }

}
