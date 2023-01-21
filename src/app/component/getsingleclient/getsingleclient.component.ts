import { Client } from './../../interface/client.interfac';
import { ClientService } from './../../servies/client.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getsingleclient',
  templateUrl: './getsingleclient.component.html',
  styleUrls: ['./getsingleclient.component.css']
})
export class GetsingleclientComponent implements OnInit {
clinet:Client={}
msg:string=''
  constructor(private route:ActivatedRoute,private clinetService:ClientService) { }
  id:string=this.route.snapshot.params['id']
  
  getsingleclinet(){
    return this.clinetService.getclientId(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
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
        console.log(res);
        this.msg=res.massage
        
      },
      error: (err:any)=>{
        console.log(err);
        
      }
    })
  }
  ngOnInit(): void {
    this.getsingleclinet()
  }

}
