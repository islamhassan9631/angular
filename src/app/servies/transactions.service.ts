import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
url="http://localhost:3000/api/transaction/"
  constructor(private http:HttpClient) { }
  getAlltransactions(){
    return this.http.get(this.url +"transaction")
  }
  addtransaction(credentials:any){
    return this.http.post(this.url +"transaction",credentials )
  }
  getsingletransaction(id:any){
    return this.http.get(this.url +"transaction/" +id) 
  }
  deletetransction(id:any){
    return this.http.delete(this.url +"transaction/" +id)
  }
  updatetransaction(id:any,data:any){
    return this.http.patch(this.url +"transaction/" +id,data)
  }
}
