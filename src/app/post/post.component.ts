import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(f:any){
    console.log(f.value) 
    this.http.post("http://localhost:3000/api/user",f.value).subscribe(res=>{
      console.log(res);
    });
   }
  
}
