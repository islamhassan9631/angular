import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bulid } from 'src/app/interface/bulid,intreface';
import { BulidService } from 'src/app/servies/bulid.service';

@Component({
  selector: 'app-getsinglebuild',
  templateUrl: './getsinglebuild.component.html',
  styleUrls: ['./getsinglebuild.component.css']
})
export class GetsinglebuildComponent implements OnInit {
  searchText:any = '';
shwo:boolean= false
shwo2:boolean= false
  build:any={}

  floors:any[] = [];
    constructor(private bulidService:BulidService,private router:ActivatedRoute,private toster:ToastrService) { 
    
    }
    projectId:string=this.router.snapshot.params['projectId']
    buildingId:string=this.router.snapshot.params['buildingId']
    id:string = this.router.snapshot.params['id'];
   
    getsinglebuild(){
  return this.bulidService.getsinglebuild(this.projectId,this.buildingId,this.id).subscribe({
    next:(res:any)=>{
     
      this.build = res.data.build

      this.floors=res.data.build.floors
  
     
      
    },
    error: (err:any)=>{
     
      
    }
  })
    }
    addfloor(data:any){
      return this.bulidService.addfloor(this.projectId,this.buildingId,this.id,data).subscribe({
        next:(res:any)=>{
          this.toster.success('Success add floor')
          
        },
        error: (err:any)=>{
          console.log(err);
          
        }
      })
    }
    show(){
      this.shwo=true
    }
    show2(){
      this.shwo2=true
    }
   deletesinglebuild(){
      return this.bulidService.deletesinglebuild(this.projectId,this.buildingId,this.id).subscribe({
        next:(res:any)=>{
         this.toster.success("Success delete")
          
      
         
          
        },
        error: (err:any)=>{
          
          
        }
      })
        }
        updatebuild(data:any){
          return this.bulidService.updatesinglebuild(this.projectId,this.buildingId,this.id,data).subscribe({
            next:(res:any)=>{
              this.toster.success("Success update")
              
            },
            error: (err:any)=>{
             
              
            }
          })
        }
    ngOnInit(): void {
      this.getsinglebuild()
    }


}
