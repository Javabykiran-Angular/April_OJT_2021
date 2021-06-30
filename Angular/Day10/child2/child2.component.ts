import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childEvent1=new EventEmitter(); 

   strdata:string="Data from Child...";

  @Output()  childEvent2=new EventEmitter();
  myjson={
    name:'Sumit',
    id:9,
    status:true
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(){
   // this.childEvent1.emit(this.strdata);

   this.childEvent2.emit(this.myjson);

  }

}
