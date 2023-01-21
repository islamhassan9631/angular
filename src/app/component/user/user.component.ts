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
  constructor(private userService:UserService) { }


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





  // clinet:string="addclint"
  show:string=""
  comp:any[]=[
    {
      "addclinet":"addclinet",
      "adduser":"adduser"
    }
  ]

  ngOnInit(): void {
    this.getProfile()
  }

}
