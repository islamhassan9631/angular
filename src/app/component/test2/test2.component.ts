import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }
  @Output() sendData=new EventEmitter
  model={
    name:"",
    age:""
  }
  submit(){
    const obj={
      name:this.model.name,
      age:this.model.age
    }
    this.sendData.emit(obj)
  }
  ngOnInit(): void {
  }

}
