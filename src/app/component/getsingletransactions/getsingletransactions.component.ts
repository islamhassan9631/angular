import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from './../../servies/transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getsingletransactions',
  templateUrl: './getsingletransactions.component.html',
  styleUrls: ['./getsingletransactions.component.css']
})
export class GetsingletransactionsComponent implements OnInit {
  tr:any={}
  item:any={}

  constructor(private transactions:TransactionsService ,private route:ActivatedRoute) { }
  id:string=this.route.snapshot.params['id']

  gettransactions(){
    return this.transactions.getsingletransaction(this.id).subscribe({
      next:(res:any)=>{
        this.tr=res.data
        this.item=res.data.transaction_info

        console.log(res);
        
      }
    })
  }
  delete(){
    return this.transactions.deletetransction(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      }
    })
  }
  update(data:any){
    return this.transactions.updatetransaction(this.id,data).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      }
    })
  }

  ngOnInit(): void {
    this.gettransactions()
  }

}
