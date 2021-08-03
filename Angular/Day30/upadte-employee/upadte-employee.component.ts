import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-upadte-employee',
  templateUrl: './upadte-employee.component.html',
  styleUrls: ['./upadte-employee.component.css']
})
export class UpadteEmployeeComponent implements OnInit {

  @Input() parentdata=<Employee>{};
  allCountry=[];
  issubmitDissabled:boolean=true;
  backendResponse:string='';

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetAllCountry();
  }

  GetAllCountry(){
    this.service.getAllCountry()
    .subscribe((response)=>{
      this.allCountry=(<any>response)
    })
  }

  onupdate(){

    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.parentdata.updateddtm=Date.now();
    // console.log(this.parentdata);
    console.log("CID "+this.parentdata.country.cid);
    console.log("CNAME "+this.parentdata.country.cname);


      this.service.UpdateEmployee(this.parentdata)
      .subscribe((response)=>{
        this.backendResponse=response;
        this.issubmitDissabled=false;
      })

  }

}
