import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strname:string="Sumit raokhande";
  num2:number=9.456897;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
