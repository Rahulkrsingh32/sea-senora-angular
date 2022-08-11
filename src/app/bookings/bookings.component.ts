import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { BoatsService } from '../boats.service';
import { BookingService } from '../booking.service';
import { BoatsModel } from '../models/boats.model';
import { BookingRequestModel } from '../models/bookingRequest.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: BookingRequestModel[];
  
  loading: boolean = false;
  errorMessage;
  id:number;
  boatFetched: BoatsModel;
  
  boatName: string; 
  imageUrl:string;
  fuelType:string;
  maxPassengers:number;
  ratePerDay:number;
  fromDate: Date;
  toDate: Date;
  totalCost: number;
  numberDays: number;
  boatId: number;
  userId: number;
  bookingsDate: Date;
  
  constructor( private bookingService: BookingService, private activatedRoute: ActivatedRoute, private boatsService: BoatsService, private router: Router, private datePipe: DatePipe ) { }


  

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

 

  cancelBooking(id : number){
    console.log("Cancelllll bookingggg")
    this.bookingService.cancelBooking(id).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  getBookings(id : number){
    this.loading = true;
    this.errorMessage = "";
    this.bookingService.getBoatForUser(id)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.bookings = response; 
          
          
          console.log(this.bookings);
        },
        (error) => {                              //error() callback
          console.error('Request failed to fetch bookings')
          this.errorMessage = error;
          this.loading = false;
        })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      let id=+params['id'];
      this.getBookings(id);
      
      console.log(id);
      
      
    })
    
  }

}
