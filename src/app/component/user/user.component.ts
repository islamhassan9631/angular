import { AuthService } from 'src/app/servies/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Users } from './../../interface/user.interface';
import { UserService } from './../../servies/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:Users={}
users:any[] = [];
file:any
show2:boolean= false
password:boolean= false
  constructor(private userService:UserService ,private router:Router ,private auth:AuthService) { }


getProfile(){
  return this.userService.getProfile().subscribe({
    next:(res:any) => {
      console.log(res.data);
      this.user = res.data;
      },
      error: (err:any) => {console.log(err);}
      
  })
}
getAllUsers(){
  return this.userService.getAllUsers().subscribe({
    next:(res:any) => {
      this.users = res.data;

    }
  })
  
}
updateuser(data:any){
  return this.userService.editProfile(data).subscribe({
    next:(res:any) => {
      this.user.password = res.data.password;
      localStorage.removeItem('token')
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
    this.userService.updateimage(myData).subscribe((res:any)=>{console.log(res);
      this.user.image=res.data.image
      this.show2=false
    })
    }
  }
  ngOnInit(): void {
    this.getProfile()
  }

}
