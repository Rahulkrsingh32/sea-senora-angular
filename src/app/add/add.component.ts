import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
    console.log("add component")
  }

  addBoat(data: any){
    this.adminService.addBoat(data).subscribe(() => {
      console.log('boat added!!');
      this.router.navigate(['/admin']);

    })
  }

  

}
