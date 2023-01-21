import { UserService } from './../../servies/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  invalidEmail:boolean = false
  
  invalidPassword:boolean = false
  msg:string = ''
  msgPassword:string = ''


  constructor(private userService:UserService,private router:Router) { }
  adduser(credentials:any){
    return this.userService.adduser(credentials).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.router.navigateByUrl('profile')
      },
      error: (httpError:any)=>{
        console.log(httpError);
        if(httpError.error.code){
          this.invalidEmail = true
        }
       
        // password
        else if(httpError.error.errors.password)
        {
          this.invalidPassword = true
          this.msgPassword = httpError.error.errors.password.message
        }
 
        
      }
    })

  }
  changeEmail(){
    this.invalidEmail = false
  }
  
  changePassword(){
    this.invalidPassword = false
  }

  ngOnInit(): void {
  }

}
