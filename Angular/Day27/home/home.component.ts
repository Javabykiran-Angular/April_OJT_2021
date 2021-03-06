import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  EmpData:any[]=[];  

  constructor(private service:HttpService,
    private router:Router
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

}
