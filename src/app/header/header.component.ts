import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  userId: string; 
  name: string; 
  signOutDone: boolean = false;

  ngOnInit(): void {
    console.log(sessionStorage);
    this.userId=sessionStorage.getItem("customerId");
    this.name=sessionStorage.getItem("username");
  }

  isLoggedIn() :boolean{
    return sessionStorage.getItem("roles") === "ADMIN" || sessionStorage.getItem("roles") === "USER";
  }

  signOut(){
    sessionStorage.clear();
    console.log("After signout "+sessionStorage);
    this.signOutDone=true;
    setTimeout(() => {
      this.signOutDone=false;
      this.router.navigate(["/"]);
      
    },2000);
    
  }

  isAdmin():boolean {
    if(sessionStorage.getItem("roles") === "ADMIN"){
      return true;
    } else {
      return false;
    }
  }

}
