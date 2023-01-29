import { Router } from '@angular/router';
import { Client } from './../../interface/client.interfac';
import { ClientService } from './../../servies/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileclient',
  templateUrl: './profileclient.component.html',
  styleUrls: ['./profileclient.component.css']
})
export class ProfileclientComponent implements OnInit {
client:Client={}
file:any
show2:boolean= false
password:boolean= false
pdfSrc:string=''
  constructor(private clientservice:ClientService,private router:Router) { }
getProfile(){
  return this.clientservice.getProfile().subscribe({
    next:(res:any)=>{
    console.log(res);
    
this.client=res.data
this.pdfSrc=`http://localhost:3000/upload/pdf/63d15553e4cc4ca673fa6048.pdf`
    },
    error: (err:any)=>{
      console.log(err);
      
    }
  })
}
updateuser(data:any){
  return this.clientservice.editProfile(data).subscribe({
    next:(res:any) => {
      this.client.password = res.data.password;
      this.router.navigateByUrl('login')
    }
   
  })
}
shwo(){
  this.show2=true;
}



showpassword(){
  this.password=true;
}

  // clinet:string="addclint"
  show:string=""
  comp:any[]=[
    {
      "addclinet":"addclinet",
      "adduser":"adduser"
    }
  ]
  handelUpload(event:any){
    console.log(event.target.files)
    this.file = event.target.files
  }

  uploadFile(){
    if(this.file){
    const myData = new FormData()
    myData.append('avatar',this.file[0])
    this.clientservice.updateimage(myData).subscribe((res:any)=>{console.log(res);
      this.client.image=res.data.image
      this.show2=false
    })
    }
  }

  ngOnInit(): void {
  this.getProfile()
  }

}
