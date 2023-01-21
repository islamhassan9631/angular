import { Bulid } from './../../interface/bulid,intreface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BulidService } from 'src/app/servies/bulid.service';

@Component({
  selector: 'app-getsinglebuilding',
  templateUrl: './getsinglebuilding.component.html',
  styleUrls: ['./getsinglebuilding.component.css']
})
export class GetsinglebuildingComponent implements OnInit {
projct:Bulid={}

  buliding:any[] = [];
    constructor(private bulidService:BulidService,private router:ActivatedRoute) { 
      console.log(this.router.snapshot.params)
    }
    projectId:string=this.router.snapshot.params['projectId']
    id:string = this.router.snapshot.params['id'];
   
    getsinglebuilding(){
  return this.bulidService.getsinglebuilding(this.projectId,this.id).subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.projct = res.data
      this.buliding=res.data.build.building
  
     
      
    },
    error: (err:any)=>{
      console.log(err);
      
    }
  })
    }
  
    ngOnInit(): void {
      this.getsinglebuilding()
    }

}
