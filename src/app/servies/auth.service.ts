import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // /api/clinet
  url="http://localhost:3000/api/user/"
  url2="http://localhost:3000/api/clinet/"
  url3="https://jsonplaceholder.typicode.com/photos"
  url4="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
 login(credentials:any){
    return this.http.post(this.url +'auth',credentials)
  }
  loginclinet(credentials:any){
    return this.http.post(this.url2 +'auth',credentials)
  }
  getToken(){
    return localStorage.getItem('token')
  }
getphotos(){
  return this.http.get(this.url3)
}
getpost(){
  return this.http.get(this.url4)
}
  logout(){
    return this.http.delete(this.url)
  }
  logoutclient(){
    return this.http.delete(this.url2+"clinet")
  }


}
