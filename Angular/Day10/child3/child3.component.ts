import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

   @Output() Child3Event=new EventEmitter();
  
  numdata:number=9;
   constructor() { }

  ngOnInit() {
  }

  OnSend(){
    this.Child3Event.emit(this.numdata);
  }

}
