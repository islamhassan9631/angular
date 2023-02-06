import { Users } from './../../interface/user.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/servies/user.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-getsingleuser',
  templateUrl: './getsingleuser.component.html',
  styleUrls: ['./getsingleuser.component.css']
})
export class GetsingleuserComponent implements OnInit {
user:Users={}
msg:any=''
show:boolean=false
  constructor(private userService:UserService,private route:ActivatedRoute,private toastr: ToastrService) { }
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
        // this.msg=res.massage
        //  this.toastr.error( res.massage)
        
      },
        error: (error:any) =>{
         
          this.toastr.error(error.error.massage);
          
           
         
          
        }
        
    })
  }
  update(data:any){
    return this.userService.updateuser(this.id,data).subscribe({
      next:(res)=>{
     this.toastr.success("success",'user updated')
     this.show=false
        
      },
      error: (error:any)=>{
        this.toastr.error(error.error.massage);
        this.show=false
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
