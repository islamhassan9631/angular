import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servies/user.service';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {

  users:any[] = [];
  constructor(private userService:UserService,private route:ActivatedRoute ) { }
  id:string=this.route.snapshot.params['id']

  getAllUsers(){
    return this.userService.getAllUsers().subscribe({
      next:(res:any) => {
        this.users = res.data;
  
      }
    })
  }
 
  ngOnInit(): void {
    this.getAllUsers()
  }

}
