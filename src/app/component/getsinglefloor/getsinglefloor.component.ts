import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BulidService } from 'src/app/servies/bulid.service';

@Component({
  selector: 'app-getsinglefloor',
  templateUrl: './getsinglefloor.component.html',
  styleUrls: ['./getsinglefloor.component.css']
})
export class GetsinglefloorComponent implements OnInit {
  searchText:any = ''
shwo:boolean= false
shwo2:boolean= false
  floor:any={}

  units:any[] = [];
    constructor(private bulidService:BulidService,private router:ActivatedRoute,private toster:ToastrService) { 
     
    }
    projectId:string=this.router.snapshot.params['projectId']
    buildingId:string=this.router.snapshot.params['buildingId']
    buildId:string=this.router.snapshot.params['buildId']
    floorId:string=this.router.snapshot.params['floorId']
    id:string = this.router.snapshot.params['id'];
   
    getsinglefloor(){
  return this.bulidService.getsinglefloor(this.projectId,this.buildingId,this.buildId,this.id).subscribe({
    next:(res:any)=>{
      
      
         this.floor = res.data
      this.units=res.data.units
      
    },
    error: (err:any)=>{
      console.log(err);
      
    }
    
})
    }
    addunit(data:any){
      return this.bulidService.addunit(this.projectId,this.buildingId,this.buildId,this.id,data).subscribe({
        next:(res:any)=>{
        this.toster.success('add unit success')
          
             this.floor = res.data[0]
          this.units=res.data.units

          
        },
        error: (err:any)=>{
          console.log(err);
          
        }
        
    })
        }
       deletesinglefloor(){
          return this.bulidService.deletesinglefloor(this.projectId,this.buildingId,this.buildId,this.id).subscribe({
            next:(res:any)=>{
             this.toster.success('delete floor success')
              
              
              
            },
            error: (err:any)=>{
              console.log(err);
              
            }
            
        })
            }
       show(){
        this.shwo=true
        this.shwo2=false
       }
       updatefloor(data:any){
        return this.bulidService.updatesinglefloor(this.projectId,this.buildingId,this.buildId,this.id,data).subscribe({
          next:(res:any)=>{
           this.toster.success('update floor success')
            
             
            
          },
          error: (err:any)=>{
           
            
          }
          
      })
          }
          show2(){
            this.shwo2=true
            this.shwo=false
           }
  ngOnInit(): void {
    this.getsinglefloor()
  }

}
