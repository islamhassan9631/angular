import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somework',
  templateUrl: './somework.component.html',
  styleUrls: ['./somework.component.css']
})
export class SomeworkComponent implements OnInit {
  posts:any[] = [
    {
      "img":'../../../assets/img/mqdefault (2).jpg',
      "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolore maxime fugiat",
      "title":"Lorem ipsum dolor sit"
    },
    {
      "img":'../../../assets/img/mqdefault (1).jpg',
      "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolore maxime fugiat",
      "title":"Lorem ipsum dolor sit"
    }, {
      "img":'../../../assets/img/mqdefault (3).jpg',
      "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolore maxime fugiat",
      "title":"Lorem ipsum dolor sit"
    },
    {
      "img":'../../../assets/img/mqdefault (2).jpg',
      "text":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolore maxime fugiat",
      "title":"Lorem ipsum dolor sit"
    },

  ];
  logo:string='../../../assets/img/bg-projects.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
