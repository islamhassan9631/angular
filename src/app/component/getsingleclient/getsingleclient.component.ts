import { Client } from './../../interface/client.interfac';
import { ClientService } from './../../servies/client.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-getsingleclient',
  templateUrl: './getsingleclient.component.html',
  styleUrls: ['./getsingleclient.component.css']
})
export class GetsingleclientComponent implements OnInit {
clinet:Client={}
msg:string=''
show:boolean=false
  constructor(private route:ActivatedRoute,private clinetService:ClientService,private toster:ToastrService) { }
  id:string=this.route.snapshot.params['id']
  
  getsingleclinet(){
    return this.clinetService.getclientId(this.id).subscribe({
      next:(res:any)=>{
       
        this.clinet=res.data;
        
        
      },
      error: (err:any)=>{
        console.log(err);
        
      }
    })
   
  } 
  delete(){
    return this.clinetService.deleteclient(this.id).subscribe({
      next:(res:any)=>{
       this.toster.success('Client deleted')
        
        
      },
      error: (err:any)=>{
       this.toster.error(err.error.message);
        
      }
    })
  }
  update(data:any){
    return this.clinetService.update(this.id,data).subscribe({
      next:(res:any)=>{
      this.toster.success('Client updated')
        this.clinet=res.data
      }
    })
  }
  shwo(){
    this.show=true;
   }
  ngOnInit(): void {
    this.getsingleclinet()
  }

}
