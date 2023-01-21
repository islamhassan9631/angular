import { ClientService } from './../../servies/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getclinet',
  templateUrl: './getclinet.component.html',
  styleUrls: ['./getclinet.component.css']
})
export class GetclinetComponent implements OnInit {
clients:any[] = [];
  constructor( private clientService:ClientService) { }
  getAllclients(){
    return this.clientService.getAllclients().subscribe({
      next:(res:any) => {
        console.log(res.data);
        
        this.clients = res.data;
  
      }
    })
  }
  ngOnInit(): void {
    this.getAllclients()
  }

}
