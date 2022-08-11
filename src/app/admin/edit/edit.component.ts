import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { BoatsService } from 'src/app/boats.service';
import { BoatsModel } from 'src/app/models/boats.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number;
  boatFetched: BoatsModel;
  loading: boolean = false;
  errorMessage;
  boatName: string; 
  imageUrl:string;
  fuelType:string;
  maxPassengers:number;
  ratePerDay:number;

  constructor(private activatedRoute: ActivatedRoute, private boatsService: BoatsService, private adminService:AdminService) { }

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

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      let id=+params['id'];
      this.getBoatById(id);
      
      console.log(id);
      
      
    })
  }

  editBoat(data: any){
    
    this.activatedRoute.params.subscribe((params:Params) => {
      this.id=+params['id'];
    })
    this.adminService.updateBoats(this.id, data).subscribe((result) => {
      console.log(result);
      window.location.reload();
    })
    
  }

  

}
