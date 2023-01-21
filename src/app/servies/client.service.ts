import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
url="http://localhost:3000/api/clinet/"
  constructor (private http:HttpClient) { }
  addclient(credentials:any){
    return this.http.post(this.url +"clinet" ,credentials)
  }
  getAllclients(){
    return this.http.get(this.url +"clinet" )
  }
  getclientId(id:any){
    return this.http.get(this.url +"client/" +id)
  }
  deleteclient(id:any){
    return this.http.delete(this.url +"client/" +id)
  }
}
