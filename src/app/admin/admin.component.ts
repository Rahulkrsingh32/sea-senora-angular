import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoatsService } from '../boats.service';
import { BoatsModel } from '../models/boats.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  boats: BoatsModel[];
  loading: boolean = false;
  errorMessage;
  p: number;

  constructor(private boatsService: BoatsService, private routerService:Router,
    private activatedRoute:ActivatedRoute) { }

  onNavigate(){
    this.routerService.navigate(['../admin'],{ relativeTo:this.activatedRoute })
  }

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

  

  ngOnInit(): void {
    this.getBoatsAvailable();
    console.log(sessionStorage);
  }

}
