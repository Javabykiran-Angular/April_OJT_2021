import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  allCountry=[];
  constructor(private service:HttpService,
              private router:Router) { }

  ngOnInit() {
      this.GetAllCountry();
  }

  GetAllCountry(){
    this.service.getAllCountry()
    .subscribe((response)=>{
      // console.log(response)
        this.allCountry=(<any>response)

    })
  }

  onSubmit(f){

    let jsonObj={
      name:f.value.name,
      phoneno:f.value.phoneno,
      departmentit:f.value.departmentit,
      status:f.value.status,
      createddtm:Date.now(),
      createdby:sessionStorage.getItem("username"),
      updateddtm:Date.now(),
      updatedby:sessionStorage.getItem("username"),
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
      }
    }

    this.service.AddEMP(jsonObj)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/home'])
    })
  }

}
