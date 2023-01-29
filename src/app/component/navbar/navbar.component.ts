import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servies/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService) { }
  logout(){
    this.authService.logout().subscribe({
      next:()=>{
        localStorage.removeItem('token')
      },
      error:(httpError:any)=>{
        console.log(httpError)
      }
    })
  }
logoutclient(){
  this.authService.logoutclient().subscribe({
    next:()=>{
      localStorage.removeItem('token')
    },
    error:(httpError:any)=>{
      console.log(httpError)
    }
  })
}
  get isLoggedIn(){
    let token = this.authService.getToken()
    if(token){
      return true
    }
    return false
  }

  ngOnInit(): void {
  }

}
