import { Bulid } from './../../interface/bulid,intreface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BulidService } from 'src/app/servies/bulid.service';

@Component({
  selector: 'app-getsinglebuilding',
  templateUrl: './getsinglebuilding.component.html',
  styleUrls: ['./getsinglebuilding.component.css']
})
export class GetsinglebuildingComponent implements OnInit {
  searchText:any=''
builing:Bulid={}
show:boolean = false
  bulidings:any[] = [];
    constructor(private bulidService:BulidService,private router:ActivatedRoute ,private route:Router) { 
      console.log(this.router.snapshot.params)
    }
    projectId:string=this.router.snapshot.params['projectId']
    id:string = this.router.snapshot.params['id'];
   
    getsinglebuilding(){
  return this.bulidService.getsinglebuilding(this.projectId,this.id).subscribe({
    next:(res:any)=>{
      console.log(res.data);
      this.builing = res.data.building
      this.bulidings=res.data.building.build
  
     
      
    },
    error: (err:any)=>{
      console.log(err);
      
    }
  })
    }
    addbuild(data:any){
      this.bulidService.addsinglebuild(this.projectId,this.id,data).subscribe({
        next:(res:any)=>{
          console.log(res);
this.route.navigateByUrl('/getsigleproject/63cdf6f20826ebcec5e63d5e/getsinglebuilding/63cdf6f20826ebcec5e63d5f')
          
        },
        error: (err:any)=>{
          console.log(err);
          
        }
      })
    }
    shwo(){
      this.show=true
    }
  
    ngOnInit(): void {
      this.getsinglebuilding()
    }

}
