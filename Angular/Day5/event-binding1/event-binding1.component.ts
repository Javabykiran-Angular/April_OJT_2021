import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  flag:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.flag){
      console.log("Click Event Occur....");
      this.flag=false;
    }
   
  }

  onImageClick(){
    alert("On Image click....");
  }

  OnEvent(myevent){
    console.log(myevent);
    console.log("Data is :: "+myevent.target.value);
  }
  onShow(name){
    console.log(name);
    console.log(name.value);
    name.style.background='red';
  }

}
