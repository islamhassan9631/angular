import { Router } from '@angular/router';
import { PasswordService } from './../../servies/password.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-reset-code',
  templateUrl: './verify-reset-code.component.html',
  styleUrls: ['./verify-reset-code.component.css']
})
export class VerifyResetCodeComponent implements OnInit {

  constructor(private password:PasswordService,private router:Router) { }
  code(data:any){
    return this.password.verifypassword(data).subscribe({
      next:(res:any) =>{
        this.router.navigateByUrl('reset')
      }
    })

    
  }

  ngOnInit(): void {
  }

}
