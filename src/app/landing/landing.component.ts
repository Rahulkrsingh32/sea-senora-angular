import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  loggedIn:boolean = false;
  isLoggedIn() :boolean{
    return sessionStorage.getItem("roles") === "ADMIN" || sessionStorage.getItem("roles") === "USER";
  }

  constructor() { }

  ngOnInit(): void {
    this.loggedIn = this.isLoggedIn();
  }

}
