import { BulidService } from 'src/app/servies/bulid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private x:BulidService) { }
test(){
  console.log(this.x.ids);
  
}
  ngOnInit(): void {
    this.test()
  }

}
