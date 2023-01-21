import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BulidService {
url="http://localhost:3000/api/Build/"
  constructor(private http:HttpClient) { }
  getbuliding(){
    return this.http.get(this.url +"build")
  }
  getsingelprojct(id:any){
    return this.http.get(this.url +"build/" +id)
  }
  getsinglebuilding(projectId:any,id:any){
    return this.http.get(this.url +`project/${projectId}/build/${id}`)
  }
}
