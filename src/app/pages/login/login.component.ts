import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servies/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin:boolean= false
  client:boolean= false
  constructor(private userService:AuthService,private router:Router) { }
 
  login(credentials:any){
    return this.userService.login(credentials).subscribe({
      next:(res:any)=>{
        // console.log(res);
        // console.log(res.data.token);
        
        localStorage.setItem("token",res.data.token);
        this.router.navigateByUrl('profile')
      },
      error: (httpError:any)=>{
        console.log(httpError);}
 
      })
    }
    loginclient(credentials:any){
      return this.userService.loginclinet(credentials).subscribe({
        next:(res:any)=>{
           console.log(res);
          // console.log(res.data.token);
          
         localStorage.setItem("token",res.data.token);
       this.router.navigateByUrl('profileclient')
        },
        error: (httpError:any)=>{
          console.log(httpError);}
   
        })
      }
      showadmin(){
        this.admin = true;
        this.client=false
      }
      showclient(){
        this.client = true;
        this.admin=false
      }
     ngOnInit(): void {
      
    }
  

}
