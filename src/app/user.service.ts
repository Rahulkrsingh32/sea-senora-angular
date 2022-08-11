import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  signUp(data: any): Observable<any>{ 
    return this.http.post<any>(this.baseUrl+"signup", data, {headers : new HttpHeaders ({'Content-Type' : 'application/json'})});
  }

  signIn(data: any): Observable<any>{
    return this.http.post(this.baseUrl+'signin', data, {headers : new HttpHeaders ({'Content-Type' : 'application/json'})});
  }

  addBoat(boatInfo: any){
    return this.http.post(this.baseUrl+'admin/addboat', boatInfo );
  }
}
