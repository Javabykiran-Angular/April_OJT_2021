import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam perferendis nihil! Ratione voluptatem quas doloribus a architecto non earum quam et explicabo excepturi deleniti adipisci, fuga laudantium repudiandae aut.";
  
  constructor() { }

  ngOnInit() {
  }

}
