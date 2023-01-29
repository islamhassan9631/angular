import { Router } from '@angular/router';
import { PasswordService } from './../../servies/password.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private password:PasswordService,private router:Router) { }
  new(data:any){
    return this.password.resetpassword(data).subscribe({
      next:(res:any)=>{
        localStorage.setItem("token",res.data.token);
        this.router.navigateByUrl('profile')
      }
    })
  }

  ngOnInit(): void {
  }

}
