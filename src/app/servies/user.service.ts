import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 url="http://localhost:3000/api/user/"
  constructor(private http:HttpClient) { }
  adduser(credentials:any){
    return this.http.post(this.url ,credentials)
  }
  getProfile(){
    return this.http.get(this.url +'user')
  }
  getAllUsers(){
    return this.http.get(this.url )
  } 
  getuserById(id:any){
    return this.http.get(this.url +'user/' +id)
  }
  deleteuser(id:any){
    return this.http.delete(this.url +'user/' +id)

  }
  updateuser(id:any,data:any){
    return this.http.patch(this.url +'user/' +id,data)
  }
  updateimage(img:any){
    return this.http.post(this.url +'user/' ,img)
  }
  editProfile(data:any){
    return this.http.patch(this.url + 'user/',data)
  }
}
