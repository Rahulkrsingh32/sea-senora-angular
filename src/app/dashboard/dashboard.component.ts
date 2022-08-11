import { Component, OnInit } from '@angular/core';
import { BoatsService } from '../boats.service';
import { BoatsModel } from '../models/boats.model';
import { ServerModel } from '../models/server.model';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  servers:ServerModel[];
  boats: BoatsModel[];
  loading: boolean = false;
  errorMessage;

  constructor(private serverService:ServerService, private boatsService: BoatsService) { }
  userId: string = sessionStorage.getItem("customerId");

  public getBoatsAvailable() {
    this.loading = true;
    this.errorMessage = "";
    this.boatsService.getBoats()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.boats = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        })
  }

  isLoggedIn() :boolean{
    return sessionStorage.getItem("roles") === "ADMIN" || sessionStorage.getItem("roles") === "USER";
  }

 

  ngOnInit(): void {
    this.servers=this.serverService.getBoats();
    this.getBoatsAvailable();
    console.log(sessionStorage);
    
  }

}
