import { TransactionsService } from './../../servies/transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent implements OnInit {

  constructor(private transactionsService:TransactionsService) { }
  addtransction(credentials:any){
    return this.transactionsService.addtransaction(credentials).subscribe({
      next: (res:any) => {
        console.log(res);
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }

  ngOnInit(): void {

  }

}
