import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostsData:any[]=[];
  myid:string;
  mytitle:string;
  mybody:string;
  ishidden:boolean=true;

  constructor(private service :MyhttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }

  GetAllPost(){
    this.service.getpost()
    .subscribe((response)=>{
      console.log(response);
      this.PostsData=(<any>response);      
    })
  }

  onSend(title,body){

    let obj={
      title:title.value,
      body:body.value
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
        title.value='';
        body.value='';
    })
  }

  onEdit(item){
    this.myid=item.id;
    this.mytitle=item.title;
    this.mybody=item.body;
    this.ishidden=false;
  }

  OnFinalSubmit(){

    let obj={
      id:this.myid,
      title:this.mytitle,
      body:this.mybody
    }

    this.service.Putdata(obj)
    .subscribe((response)=>{
        console.log(response)
    });
  }

}
