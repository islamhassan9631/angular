import { Router } from '@angular/router';
import { BulidService } from 'src/app/servies/bulid.service';
import { TransactionsService } from './../../servies/transactions.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
     unitprice:new FormControl(43),
   
     
      payment : new FormControl('cash'),
      paymentmethods : new FormControl(),
      firstpart : new FormControl(),
      remaining : new FormControl(),
      lnlayvalues : new FormControl(),
    

  })
  constructor(private transactionsService:TransactionsService,private x:BulidService ,private toster:ToastrService,private router:Router) { }
  get transactionEmail(){return this.transaction.get('unit')}
  get transactionPassword(){return this.transaction.get('client')}
  get transaction2(){return this.transaction.get('unitprice')}
  get frist(){return this.transaction.get("firstpart")}
   get transactionInfo(){
   
    
    return this.transaction.get('transaction_info')}


  get transactionData(){return this.transaction.controls}
  addtransction(){
   
    let y={unit:this.transaction.value.unit,client:this.transaction.value.client,transaction_info:{unitprice:this.transaction.value.unitprice,firstpart:this.transaction.value.firstpart,
      remaining : this.transaction.value.remaining,
      lnlayvalues:this.transaction.value.lnlayvalues,
      payment:this.transaction.value.payment,
      paymentmethods:this.transaction.value.paymentmethods

    }}
   
    
    return this.transactionsService.addtransaction(y).subscribe({
      next: (res:any) => {
     this.toster.success('Transaction added')
     this.router.navigateByUrl('profile')
        
      },
      error: (err:any) => {
       this.toster.error(err.message)
        
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
  let frist=this.transaction.value.firstpart
  
this.transaction.value.remaining=(this.transaction.value.unitprice-frist)
 let methods=this.transaction.value.paymentmethods

 if (methods == "month"){
  let b= this.transaction.value.remaining/12
  
  

this.transaction.patchValue({
  lnlayvalues:(b)
  
})
 }
 if(methods == "half"){
  let uu= this.transaction.value.remaining/2
  this.transaction.patchValue({
   lnlayvalues:(uu)
   
 })
 }
 if(methods == "quarter"){
  let uu= this.transaction.value.remaining/4
  this.transaction.patchValue({
   lnlayvalues:(uu)
   
 })
 }
// this.transaction.value.lnlay_values=b
this.transaction.patchValue({
  remaining:(this.transaction.value.unitprice-frist),
  

})

}

 getunit(ids:any,unitId:any){
  return this.x.getsingleunit(ids.projectId,ids.buildingId,ids.buildId,ids.id,unitId).subscribe({
    next: (res:any) => {
      
      this.transaction.patchValue({
        unitprice: res.data.price,
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
