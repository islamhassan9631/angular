import { BulidService } from 'src/app/servies/bulid.service';
import { TransactionsService } from './../../servies/transactions.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.css']
})
export class AddtransactionComponent implements OnInit {
  unitid=''
  transaction = new FormGroup({
    unit: new FormControl("" ),
    
    client: new FormControl('' ) ,
     unit_price:new FormControl(43),
   
     
      payment : new FormControl('cash'),
      payment_methods : new FormControl(),
      first_part : new FormControl(),
      remaining : new FormControl(),
      lnlay_values : new FormControl(),
    

  })
  constructor(private transactionsService:TransactionsService,private x:BulidService) { }
  get transactionEmail(){return this.transaction.get('unit')}
  get transactionPassword(){return this.transaction.get('client')}
  get transaction2(){return this.transaction.get('unit_price')}
  get frist(){return this.transaction.get("first_part")}
   get transactionInfo(){
   
    
    return this.transaction.get('transaction_info')}


  get transactionData(){return this.transaction.controls}
  addtransction(){
    console.log(this.transaction);
    let y={unit:this.transaction.value.unit,client:this.transaction.value.client,transaction_info:{unit_price:this.transaction.value.unit_price,first_part:this.transaction.value.first_part,
      remaining : this.transaction.value.remaining,
      lnlay_values:this.transaction.value.lnlay_values,
      payment:this.transaction.value.payment,
      payment_methods:this.transaction.value.payment_methods

    }}
   
    
    return this.transactionsService.addtransaction(y).subscribe({
      next: (res:any) => {
        console.log(res);
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }
// test(e){
// this.unitid=e.target.value
// }
test(e:any){
 
 let ids=JSON.parse(localStorage.getItem('ids')||'') ;
//  console.log(ids);
//  console.log(e.value);
 
 this.getunit(ids,e.value)
//  console.log(this.getunit(ids,e.value));

 
}
test2(e:any){
  let frist=this.transaction.value.first_part
  
this.transaction.value.remaining=(this.transaction.value.unit_price-frist)
 let methods=this.transaction.value.payment_methods

 if (methods == "month"){
  let b= this.transaction.value.remaining/12
  
  

this.transaction.patchValue({
  lnlay_values:(b)
  
})
 }
 if(methods == "half"){
  let uu= this.transaction.value.remaining/2
  this.transaction.patchValue({
   lnlay_values:(uu)
   
 })
 }
 if(methods == "quarter"){
  let uu= this.transaction.value.remaining/4
  this.transaction.patchValue({
   lnlay_values:(uu)
   
 })
 }
// this.transaction.value.lnlay_values=b
this.transaction.patchValue({
  remaining:(this.transaction.value.unit_price-frist),
  

})

}

 getunit(ids:any,unitId:any){
  return this.x.getsingleunit(ids.projectId,ids.buildingId,ids.buildId,ids.id,unitId).subscribe({
    next: (res:any) => {
      
      this.transaction.patchValue({
        unit_price: res.data.price,
        // first_part:(res.data.)
        
       
      });
    },error: (err:any) => {
      console.log(err);
      
    }
  })
}
 
  ngOnInit(): void {

  }

}
