import { ActivatedRoute } from '@angular/router';
import { Bulid } from './../../interface/bulid,intreface';
import { BulidService } from './../../servies/bulid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getsingleproject',
  templateUrl: './getsingleproject.component.html',
  styleUrls: ['./getsingleproject.component.css']
})
export class GetsingleprojectComponent implements OnInit {
projct:Bulid={}
buliding:any[] = [];
  constructor(private bulidService:BulidService,private router:ActivatedRoute) { }
  id:string = this.router.snapshot.params['id'];
  getsingleproject(){
return this.bulidService.getsingelprojct(this.id).subscribe({
  next:(res:any)=>{
    console.log(res.data);
    this.projct = res.data.build
    this.buliding=res.data.build.building

   
    
  },
  error: (err:any)=>{
    console.log(err);
    
  }
})
  }

  ngOnInit(): void {
    this.getsingleproject()
  }

}
