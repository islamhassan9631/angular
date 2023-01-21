import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imgs: any[] = [
    {
      "img":'../../../assets/img/mqdefault (2).jpg'
    },
    
    {
      "img":'../../../assets/img/mqdefault (3).jpg'
    },
    
    {
      "img":'../../../assets/img/1.png'
    },
  ];
  logo:string='../../../assets/img/WhatsApp Image 2022-11-10 at 01.10.40.jpeg'

  constructor() { }

  ngOnInit(): void {
  }

}
