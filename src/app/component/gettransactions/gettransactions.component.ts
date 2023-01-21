import { TransactionsService } from './../../servies/transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gettransactions',
  templateUrl: './gettransactions.component.html',
  styleUrls: ['./gettransactions.component.css']
})
export class GettransactionsComponent implements OnInit {
  transctions:any[] = [];
  constructor(private transactionsService:TransactionsService) { }
getalltransactions(){
  return this.transactionsService.getAlltransactions().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.transctions = res.data;
    },
    error: (err:any)=>{
      console.log(err);
      
    }
  })
}
  ngOnInit(): void {
    this.getalltransactions()
  }

}
