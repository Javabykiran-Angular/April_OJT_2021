import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../employee';
import { DialogService } from '../shared/dialog.service';
import { ToastrService  } from 'ngx-toastr';

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

  nameSearch:string='';

  constructor(private service:HttpService,
    private router:Router,
    private modalservice:BsModalService,
    private dialogservice:DialogService,
    private toaster:ToastrService
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

  onDelete(){
    if(this.IsRadioCheck()){
        this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
        .afterClosed()
        .subscribe((res)=>{
          if(res)
          {
            //perform a logic
            console.log(res);

             
            this.service.DeleteEmployee(this.empobj.id)
            .subscribe((response)=>{
              console.log(response);

              this.toaster.success(response);

              this.GetAllEMPData();
            })

          }else{
            console.log(res)
          }
        })
    }else{
        //alert('Please Select the Employee to Delete..');
        this.toaster.error("Please Select the Employee to Delete..")
      }
  }


  onChangeStatus(){
    if(this.IsRadioCheck()){
        this.toaster.info("Employee Status Change Successfully!!!")
    }else{
      this.toaster.warning("Please Select the Employee to change the Status..")
    }
  }



}
