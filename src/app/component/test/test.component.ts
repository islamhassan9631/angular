import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servies/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
gallery:any[]=[]
flag:boolean=true
count=0

  constructor(private auth:AuthService,private router:ActivatedRoute) { }
  getphotos(){
    return this.auth.getphotos().subscribe(
    (res:any) =>{
      console.log(res);
      
        this.gallery=res.data
      },
     (error:any)=>{
        console.log(error);
        
      },
    () =>{
        this.flag=false
      }
  )
  }
  in(){
   this.count++
  }
 de(){
   this.count--
  }
  getpost(){
    return this.auth.getphotos().subscribe(
      (res:any) =>{
        console.log(res);
        
          this.gallery=res.data
        },
       (error:any)=>{
          console.log(error);
          
        })
  }
  users:any[]=[]

  pushData(ev:any){
    this.users.push(ev)
  }

  ngOnInit(): void {
   this.router.data.subscribe()
  }
}
