import { Users } from './../../interface/user.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/servies/user.service';

@Component({
  selector: 'app-getsingleuser',
  templateUrl: './getsingleuser.component.html',
  styleUrls: ['./getsingleuser.component.css']
})
export class GetsingleuserComponent implements OnInit {
user:Users={}
msg:any=''
show:boolean=false
  constructor(private userService:UserService,private route:ActivatedRoute) { }
  id:string=this.route.snapshot.params['id']

  getsingleuser(){
    return this.userService.getuserById(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.user=res.data;
        
      },
      error: (err:any)=>{
        console.log(err);
        
      }
    })
  }

  deleteuser(){
    return this.userService.deleteuser(this.id).subscribe({
      next:(res:any) => {
        // console.log(res);
        this.msg=res.massage
        
        
      },
        error: (error:any) =>{
          console.log(error.massage.massage);
          this.msg=error.massage.massage;
          
        }
        
    })
  }
  update(data:any){
    return this.userService.updateuser(this.id,data).subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error: (error:any)=>{
console.log(error);

      }
    })
  }
  shwo(){
   this.show=true;
  }

  ngOnInit(): void {
    this.getsingleuser()
  }

}
