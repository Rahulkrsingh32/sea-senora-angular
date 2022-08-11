import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  baseUrl:string = "http://localhost:8080/";
  addBoat(booking: any, id: any, bid: any){
    
    return this.http.post(this.baseUrl+'usr/'+id+'/bookings/boat/'+bid, booking );
  }

  getBoatForUser(id : number): Observable<any>{

    return this.http.get(this.baseUrl+'usr/'+id+'/bookings');
  }

  cancelBooking(id: number){
    
    return this.http.delete(this.baseUrl+"bookings/"+id+"/cancel");
  }

  
  
}
