import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:3000/api/user/"
  constructor(private http:HttpClient) { }
 login(credentials:any){
    return this.http.post(this.url +'auth',credentials)
  }
}
