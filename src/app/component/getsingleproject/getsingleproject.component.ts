import { ActivatedRoute } from '@angular/router';
import { Bulid } from './../../interface/bulid,intreface';
import { BulidService } from './../../servies/bulid.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-getsingleproject',
  templateUrl: './getsingleproject.component.html',
  styleUrls: ['./getsingleproject.component.css']
})
export class GetsingleprojectComponent implements OnInit {
projct:Bulid={}
buliding:any[] = [];
  constructor(private bulidService:BulidService,private router:ActivatedRoute,private toster:ToastrService) { }
  id:string = this.router.snapshot.params['id'];
  getsingleproject(){
return this.bulidService.getsingelprojct(this.id).subscribe({
  next:(res:any)=>{
   
    this.projct = res.data.build
    this.buliding=res.data.build.building

   
    
  },
  error: (err:any)=>{
    console.log(err);
    
  }
})
  }
  deleteprojct(){
    return this.bulidService.deletprojct(this.id).subscribe({
      next: (res:any)=>{
        this.toster.success('Deleteproject')
      },
      error: (err:any)=>{}

    })
  }
  updateprojct(data:any){
    return this.bulidService.editprojct(this.id,data).subscribe({
      next:(res:any)=>{
       this.toster.success('Edit project')
        
      },
      error:(err:any)=>{
      
        
      }
    })
  }

  ngOnInit(): void {
    this.getsingleproject()
  }

}
