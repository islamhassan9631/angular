import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  logo:string='../../../assets/img/WhatsApp Image 2022-11-10 at 01.10.40.jpeg'
  title:string="K.H.G"
  disc:string=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolore maxime fugiat, praesentium labore dolores rem illum vel aliquam nisi dicta fuga ipsam aut? Dolores nesciunt dicta nam sed necessitatibus."
  constructor() { }

  ngOnInit(): void {
  }

}
