import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoatsModel } from './models/boats.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl:string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  updateBoats(id: number, boatInfo: any) {
    
    

    return this.http.post(this.baseUrl+'admin/updateboat/'+id, boatInfo );
  }

  addBoat(boatInfo: any){
    
    return this.http.post(this.baseUrl+'admin/addboat', boatInfo );
  }

  deleteBoat(id: number){
    console.log("delete url "+this.baseUrl+"admin/deleteboat/"+id);
    return this.http.delete(this.baseUrl+"admin/deleteboat/"+id);
  } 

  getCustomers(): Observable<any>{

    return this.http.get<any>(this.baseUrl+"customer");
  }

  deleteCustomer(id: number){
    return this.http.delete(this.baseUrl+"customer/"+id);
  }

  
}
