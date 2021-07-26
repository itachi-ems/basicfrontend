import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  fileSelected!: File;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(f:any){
    console.log(f.value) 
    this.http.post("http://localhost:3000/api/user",f.value).subscribe(res=>{
      console.log(res);
    });
    this.onUpload();
   }
   onFileSelect(event:any){
    this.fileSelected = event.target.files[0];

  }

  onUpload(){
    const fd = new FormData();
    fd.append("document",this.fileSelected,this.fileSelected.name);
    this.http.post("http://localhost:3000/api/file",fd).subscribe((res)=>{
      console.log(res);
    });



    

  }
  
}
