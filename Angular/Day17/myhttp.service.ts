import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  private url ="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getpost(){
     return (this.http.get(this.url));  
  }

  PostData(obj){
   return (this.http.post(this.url,obj));
  }

  Putdata(obj){
    return (this.http.put(`${this.url}/${obj.id}`,obj));
  }

  DeleteData(id){
    return (this.http.delete(`${this.url}/${id}`));
  }



}
