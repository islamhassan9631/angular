import { Bulid } from './../../interface/bulid,intreface';
import { BulidService } from './../../servies/bulid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getbuliding',
  templateUrl: './getbuliding.component.html',
  styleUrls: ['./getbuliding.component.css']
})
export class GetbulidingComponent implements OnInit {
//  bulid:Bulid={}
buliding:any[] = [];
  constructor(private bulidService:BulidService) { }
  getbuliding(){
   return this.bulidService.getbuliding().subscribe({
      next:(res:any)=>{
        
        
this.buliding=res.data.build


      }
    })
  
  
  }

  ngOnInit(): void {
    this.getbuliding()
  }

}
