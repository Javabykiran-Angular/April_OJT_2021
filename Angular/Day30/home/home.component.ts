import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  p:number=1;
  EmpData:any[]=[]; 
  isradioClick:boolean=false; 

  modalRef: BsModalRef;
  empobj=<Employee>{};

  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };


  constructor(private service:HttpService,
    private router:Router,
    private modalservice:BsModalService
    ) { }

  ngOnInit() {
   this.GetAllEMPData();
  }

  GetAllEMPData(){
      this.service.getAllEmployee()
      .subscribe((response)=>{
        console.log(response);
        this.EmpData=(<any>response)
      })
  }

  onAddEmp(){
      this.router.navigate(['/addEmployee'])
  }

  onRadio(item){
    //console.log(item);
    this.isradioClick=true;
    this.empobj=item;
   // console.log(this.empobj);
  }

  IsRadioCheck(){
    if(this.isradioClick==true)
      return true;
    else
      return false;
  }

  onEdit(popUp:TemplateRef<any>){
      if(this.IsRadioCheck()){
       // alert('Employee is selected...');

          this.modalRef=this.modalservice.show(popUp,this.config)

      }else{
        alert('Please Select the Employee to update..');
      }
  }



}
