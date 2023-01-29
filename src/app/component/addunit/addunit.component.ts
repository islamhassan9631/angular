import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addunit',
  templateUrl: './addunit.component.html',
  styleUrls: ['./addunit.component.css']
})
export class AddunitComponent implements OnInit {
@Input()count=0
  
 
  constructor() { }

  ngOnInit(): void {
  }

}
