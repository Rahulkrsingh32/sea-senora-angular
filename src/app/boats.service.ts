import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BoatsModel } from './models/boats.model';

@Injectable({
  providedIn: 'root'
})
export class BoatsService {

  baseUrl:string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getBoats(): Observable<BoatsModel[]> {
    
    return this.http.get<BoatsModel[]>(this.baseUrl+'boats');
  }

  

  getBoat(id: number): Observable<any>{
    console.log(this.baseUrl+`boats/${id}`)
    return this.http.get(this.baseUrl+`boats/${id}`);
  }
}
