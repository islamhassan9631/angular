import { Component, OnInit } from '@angular/core';
import { BulidService } from 'src/app/servies/bulid.service';

@Component({
  selector: 'app-getproject',
  templateUrl: './getproject.component.html',
  styleUrls: ['./getproject.component.css']
})
export class GetprojectComponent implements OnInit {
  searchText:any = ''

  buliding:any[] = [];
  constructor(private bulidService:BulidService) { }
  getbuliding(){
   return this.bulidService.getbuliding().subscribe({
      next:(res:any)=>{
        console.log(res.data.build);
        
this.buliding=res.data.build


      }
    })
  
  
  }

  ngOnInit(): void {
    this.getbuliding()
  }

}



