import { ClientService } from './../../servies/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addclinet',
  templateUrl: './addclinet.component.html',
  styleUrls: ['./addclinet.component.css']
})
export class AddclinetComponent implements OnInit {
  invalidEmail:boolean = false
  
  invalidPassword:boolean = false
  msg:string = ''
  msgPassword:string = ''
  constructor(private clinetrService:ClientService,private router:Router) { }
  addclinet(credentials:any){
    return this.clinetrService.addclient(credentials).subscribe({
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
