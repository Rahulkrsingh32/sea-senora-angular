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
  loginTrue: boolean = false;
  loginError: boolean = false;


  ngOnInit(): void {
    
    console.log("login");
  }

  setLoginSuccess(){
    this.loginTrue = true;
  }

  setLoginError(value: boolean){
    this.loginError=value;
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
        this.setLoginError(true);
        setTimeout(() => {
          this.setLoginError(false);
          window.location.reload();
        }, 2000);

      } else {
        sessionStorage.setItem('username',sendData.username);
        sessionStorage.setItem('token', 'HTTP_TOKEN' + res.token);
        sessionStorage.setItem('roles', res.roles);
        sessionStorage.setItem('customerId', res.customerID);
        if(sessionStorage.getItem("roles") === "ADMIN") {
          sessionStorage.setItem("isAdminLoggedIn", "true");
          this.setLoginSuccess();
          setTimeout(() => {
            this.router.navigate(["admin"]);
          }, 2000);
          
        } else if (sessionStorage.getItem("roles") === "USER") {
          sessionStorage.setItem("isUserLoggedIn", "true");
          this.setLoginSuccess();
          setTimeout(() => {
            this.router.navigate(["dashboard"]);
          }, 3000);
          
        }
      }
    }, (error) => {
      this.errorMessage = "Something went wrong."
      console.log(error);
    })
  }



}
