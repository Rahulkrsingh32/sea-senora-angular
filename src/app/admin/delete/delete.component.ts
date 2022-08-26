import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { BoatsService } from 'src/app/boats.service';
import { BoatsModel } from 'src/app/models/boats.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  id:number;
  boatFetched: BoatsModel;
  loading: boolean = false;
  errorMessage;
  boatName: string; 
  imageUrl:string;
  fuelType:string;
  maxPassengers:number;
  ratePerDay:number;
  deleted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private boatsService: BoatsService, private adminService:AdminService, private router:Router) { }

  public getBoatById(id: number) {
    this.loading = true;
    this.errorMessage = "";
    this.boatsService.getBoat(id)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.boatFetched = response; 
          this.boatName=this.boatFetched.boatName;
          this.imageUrl=this.boatFetched.imageUrl;
          this.fuelType=this.boatFetched.fuelType;
          this.maxPassengers=this.boatFetched.maxPassengers;
          this.ratePerDay=this.boatFetched.ratePerDay;
          console.log(this.boatFetched);
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        })
        
  }

  cancel(){
    this.router.navigate(['/admin']);
  }

  delete(){
    this.activatedRoute.params.subscribe((params:Params) => {
      let id=+params['id'];
      this.id=id;
  })
    console.log("delete id"+this.id)
    this.adminService.deleteBoat(this.id).subscribe(() => {
      this.deleted=true;
      setTimeout(() => {
        this.deleted=false;
        this.router.navigate(['/admin']);
      }, 2000);
      
    });
  }
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      let id=+params['id'];
      this.getBoatById(id);
  })
}

}
