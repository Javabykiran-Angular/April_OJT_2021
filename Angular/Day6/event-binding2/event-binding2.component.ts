import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {
  result:number=0;
  name1:string='';
  
  constructor() { }

  ngOnInit() {
  }

  onAddition(num1,num2){
    let n1:number=+num1;
    let n2:number=+num2;
    this.result=n1+n2;
    console.log("Result is "+this.result);
  }

  OnChange(myname){
    console.log("Change Event Occur...");
    myname.style.background='red';
  }

  onKeyUp(){
    console.log("Key up Event Occur");
  }

  onKeydown(){
    console.log("Key Down Event Occur..");
  }

}
