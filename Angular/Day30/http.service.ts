import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl:string="http://localhost:8080/api/";
  
  constructor(private http:HttpClient) { }

    LoginCheck(obj){
      return (this.http.post(`${this.BaseUrl}logincheck`,obj));
    }   

    getAllEmployee(){
      return (this.http.get(`${this.BaseUrl}getallemployee`));
    }

    getAllCountry(){
         return (this.http.get(`${this.BaseUrl}getallcountry`));
    }

    AddEMP(obj){
       return  (this.http.post(`${this.BaseUrl}addemployee`,obj,{responseType:"text"}));
    }

    getParticularEmpDetails(id){
      return (this.http.get(`${this.BaseUrl}getemployeebyid/${id}`));
    }

    UpdateEmployee(obj){
        return (this.http.put(`${this.BaseUrl}updateemployee`,obj,{responseType:'text'}));
    }


}
