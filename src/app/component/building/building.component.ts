import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
  }

}
