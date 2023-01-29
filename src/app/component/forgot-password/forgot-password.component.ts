import { Router } from '@angular/router';
import { PasswordService } from './../../servies/password.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private password:PasswordService,private router:Router) { }
  forgetpassword(data:any)  {
    return this.password.forgetpassword(data).subscribe({
      next:(res:any)=>{
this.router.navigateByUrl('verify')
      }
    })
  }

  ngOnInit(): void {
  }

}
