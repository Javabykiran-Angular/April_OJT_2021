import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-task',
  templateUrl: './fifth-task.component.html',
  styleUrls: ['./fifth-task.component.css']
})
export class FifthTaskComponent implements OnInit {

  EmpData=[];
  constructor() { }

  ngOnInit() {
  }

  OnAdd(id,empname,empsalary){
    let tempjson={
      id:id.value,
      name:empname.value,
      salary:empsalary.value
    }
    this.EmpData.push(tempjson);
    id.value='';
    empname.value='';
    empsalary.value='';
  }

  onRemove(index){
    this.EmpData.splice(index,1);
  }

}
