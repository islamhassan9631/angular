import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
url="http://localhost:3000/api/password"
  constructor(private http:HttpClient) { }
  forgetpassword(data:string){
    return this.http.post(this.url +"/forgotPassword",data)
  }
  verifypassword(data:any){
    return this.http.post(this.url +"/verifyResetCode",data)
  }
  resetpassword(data:any){
    return this.http.patch(this.url +"/resetPassword",data)
  }
}
