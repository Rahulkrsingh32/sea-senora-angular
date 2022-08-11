import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../models/request.mpdel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  username: string = "";
  password: string = "";
  isLoggedOut: boolean= false;
  errorMessage: string = "";

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((active) => {
      //this.isLoggedOut = Boolean(active.isLoggedOut);
    })
  }

  signin(data: any){
    const sendData: Request = {
      username : data.username,
      password : data.password
    }
    console.log("login form"+sendData);
    this.userService.signIn(sendData).subscribe((res) => {
      if(res["statusCode"] >= 400 && res["statusCode"] <= 499) {
        this.errorMessage = res["errorMessage"];
      } else {
        sessionStorage.setItem('username',sendData.username);
        sessionStorage.setItem('token', 'HTTP_TOKEN' + res.token);
        sessionStorage.setItem('roles', res.roles);
        sessionStorage.setItem('customerId', res.customerID);
        if(sessionStorage.getItem("roles") === "ADMIN") {
          sessionStorage.setItem("isAdminLoggedIn", "true");
          this.router.navigate(["admin"]);
        } else if (sessionStorage.getItem("roles") === "USER") {
          sessionStorage.setItem("isUserLoggedIn", "true");
          this.router.navigate(["dashboard"])
        }
      }
    }, (error) => {
      this.errorMessage = "Something went wrong."
    })
  }

  // signin() {

  // }

  // addUser(data: any){
  //   const sendData: Customer = {
  //     name : data.name,
  //     emailId: data.emailId,
  //     phoneNumber: data.phoneNumber,
  //     username: data.username,
  //     password: data.password,
  //     roles : ["USER"]
  //   }
    
  //   let body = JSON.stringify(sendData); 
    
  //   this.userService.signUp(sendData).subscribe((result) => {
  //     console.log("user added");
  //     if(result["statusCode"] >= 400 && result["ststusCode"]<=499) {
  //       this.errorMessage = result["errorMessage"] + " Please Login";
  //     } else {
  //       this.successMessage = "Registration Successfull";
  //     } 
  //     this.navigateToLogin();
  //   },(error) => {
  //     console.log(error);
  //     this.errorMessage = "Something went wrong please try again!"
  //   });


  // }

}
