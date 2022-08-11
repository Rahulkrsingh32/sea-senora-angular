import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BoatsService } from '../boats.service';
import { BookingService } from '../booking.service';
import { BoatsModel } from '../models/boats.model';
import { BookingsModel } from '../models/booking.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  id:number;
  boatFetched: BoatsModel;
  loading: boolean = false;
  errorMessage;
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

  constructor(private boatsService: BoatsService, private activatedRoute: ActivatedRoute, private bookingService: BookingService, private router: Router) { }

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

  countDays(from: any, to: any): number {
    from = new Date(from);
    to = new Date(to);
    return Math.floor(( Date.UTC(to.getFullYear(), to.getMonth(), to.getDate()) - Date.UTC(from.getFullYear(), from.getMonth(), from.getDate()) ) / (1000 * 60 * 60 *24));
  }

  



  selectedDate(){
    console.log("From = "+this.fromDate+ "To date = "+this.toDate);
    
    this.numberDays = this.countDays(this.fromDate, this.toDate);
    console.log("number of days"+this.numberDays);
    this.totalCost = this.ratePerDay * this.numberDays;
    const sendData : BookingsModel = {
      
      bookingDate : this.bookingsDate,
      bookedFromDate : this.fromDate,
      bookedToDate : this.toDate,
      boatId : this.boatId
    }
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      let id=+params['bid'];
      this.getBoatById(id);
      this.boatId=id;
      this.userId=+params['id'];
      console.log(id);
      this.bookingsDate=new Date();
      
    })

  }

  bookBoat( ){
    const sendData : BookingsModel = {
      bookingDate : this.bookingsDate,
      bookedFromDate : this.fromDate,
      bookedToDate : this.toDate,
      boatId : this.boatId
    }
    
    this.bookingService.addBoat(sendData,this.userId, this.boatId).subscribe((res) => {
      console.log("BookingDone!!");
      this.router.navigate(['/user/bookings',this.userId]);
    })

  }

  // addBoat(data: any){
  //   this.adminService.addBoat(data).subscribe((result) => {
  //     console.log('boat added!!');
  //     this.router.navigate(['/admin']);

  //   })
  // }



  
  

}
