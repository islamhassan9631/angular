import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BulidService } from 'src/app/servies/bulid.service';

@Component({
  selector: 'app-getsingleunit',
  templateUrl: './getsingleunit.component.html',
  styleUrls: ['./getsingleunit.component.css']
})
export class GetsingleunitComponent implements OnInit {
  shwo:boolean= false
unit:any={}
  constructor(private bulidService:BulidService,private router:ActivatedRoute,private toster:ToastrService) { 
    console.log(this.router.snapshot.params)
  }
  projectId:string=this.router.snapshot.params['projectId']
  buildingId:string=this.router.snapshot.params['buildingId']
  buildId:string=this.router.snapshot.params['buildId']
  floorId:string=this.router.snapshot.params['floorId']
  id:string = this.router.snapshot.params['id'];
  
  getsingleunit(){
    return this.bulidService.getsingleunit(this.projectId,this.buildingId,this.buildId,this.floorId,this.id).subscribe({
      next:(res:any)=>{
        console.log(res.data);
        this.unit= res.data
        
          console.log(res);
          
        
      },
      error: (err:any)=>{
        console.log(err);
        
      }
      
  })
      }
      deletesingleunit(){
        return this.bulidService.deletesingleunit(this.projectId,this.buildingId,this.buildId,this.floorId,this.id).subscribe({
          next:(res:any)=>{
           
            this.toster.success('unit deleted');
            
             
              
            
          },
          error: (err:any)=>{
            console.log(err);
            
          }
          
      })
          }
          updateunit(data:any){
            return this.bulidService.updatesingleunit(this.projectId,this.buildingId,this.buildId,this.floorId,this.id,data).subscribe({
              next:(res:any)=>{
                console.log(res.data);
                this.toster.success('unit updated');
                
                 
                  
                
              },
              error: (err:any)=>{
                console.log(err);
                
              }
              
          })
              }
              show(){
                this.shwo=true
              }

  ngOnInit(): void {
    this.getsingleunit()
  }

}
