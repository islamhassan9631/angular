import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BulidService {
url="http://localhost:3000/api/Build/"
ids={}
  constructor(private http:HttpClient) { }
  getbuliding(){
    return this.http.get(this.url +"build")
  }
  getsingelprojct(id:any){
    return this.http.get(this.url +"build/" +id)
  }
  deletprojct(id:any){
    return this.http.delete(this.url +"build/" +id)
  }
  editprojct(id:any,data:any){
    return this.http.patch(this.url +"build/" +id ,data)
  }
  getsinglebuilding(projectId:any,id:any){
    return this.http.get(this.url +`project/${projectId}/build/${id}`)
  }
  getsinglebuild(projectId:any,buildingId:any,id:any){
    return this.http.get(this.url +`project/${projectId}/buildings/${buildingId}/build/${id}`)
  }
 updatesinglebuild(projectId:any,buildingId:any,id:any,data:any){
    return this.http.patch(this.url +`project/${projectId}/buildings/${buildingId}/build/${id}`,data)
  }
 deletesinglebuild(projectId:any,buildingId:any,id:any){
    return this.http.delete(this.url +`project/${projectId}/buildings/${buildingId}/build/${id}`)
  }
  getsinglefloor(projectId:any,buildingId:any,buildId:any,id:any){
   localStorage.setItem("ids",JSON.stringify({projectId,buildingId,buildId,id}) ) 
    return this.http.get(this.url +`project/${projectId}/buildings/${buildingId}/build/${buildId}/floors/${id}`)
  }
 updatesinglefloor(projectId:any,buildingId:any,buildId:any,id:any,data:any){
    return this.http.patch(this.url +`project/${projectId}/buildings/${buildingId}/build/${buildId}/floors/${id}`,data)
  }
 deletesinglefloor(projectId:any,buildingId:any,buildId:any,id:any){
    return this.http.delete(this.url +`project/${projectId}/buildings/${buildingId}/build/${buildId}/floors/${id}`)
  }
  addproject(data:any){
    return this.http.post(this.url +"build" ,data )
  }

  addsinglebuild(projectId:any,id:any,data:any){
    return this.http.post(this.url +`project/${projectId}/build/${id}`,data)
  }
  addfloor(projectId:any,buildingId:any,id:any,data:any){
    return this.http.post(this.url +`project/${projectId}/buildings/${buildingId}/build/${id}`,data)
  }
  addunit(projectId:any,buildingId:any,buildId:any,id:any,data:any){
    return this.http.post(this.url +`project/${projectId}/buildings/${buildingId}/build/${buildId}/floors/${id}`,data)
  }
  getsingleunit(projectId:any,buildingId:any,buildId:any,floorId:any,id:any){
   
    return this.http.get(this.url +`project/${projectId}/buildings/${buildingId}/build/${buildId}/floors/${floorId}/units/${id}`)
  }
 updatesingleunit(projectId:any,buildingId:any,buildId:any,floorId:any,id:any,data:any){
    return this.http.patch(this.url +`project/${projectId}/buildings/${buildingId}/build/${buildId}/floors/${floorId}/units/${id}`,data)
  }
  deletesingleunit(projectId:any,buildingId:any,buildId:any,floorId:any,id:any){
    return this.http.delete(this.url +`project/${projectId}/buildings/${buildingId}/build/${buildId}/floors/${floorId}/units/${id}`)
  }
}
