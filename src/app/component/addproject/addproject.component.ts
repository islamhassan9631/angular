import { Router } from '@angular/router';
import { BulidService } from 'src/app/servies/bulid.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor(private BulidService:BulidService,private router:Router,private toster:ToastrService) { }
  addproject(data:any) {
    this.BulidService.addproject(data).subscribe({
      next: (res:any) => {
       this.toster.success('Project added')
        this.router.navigateByUrl('getproject')
        
      },
      error: (err:any) => {}
    })
  }

  ngOnInit(): void {
  }

}
