import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  successMessage:string ="";
  errorMessage:string="";
  signUpsuccess: boolean = false;
  userExist: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log("signup");
    this.signUpsuccess=false;

  }

  setSignUpSuccess(){
    this.signUpsuccess=true;
  }

  navigateToLogin(){
    this.setSignUpSuccess();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
    
  }

  reloadSignup(){
    this.userExist=true;
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  addUser(data: any){
    const sendData: Customer = {
      name : data.name,
      emailId: data.emailId,
      phoneNumber: data.phoneNumber,
      username: data.username,
      password: data.password,
      roles : ["USER"]
    }
    
    
    this.userService.signUp(sendData).subscribe((result) => {
      console.log("user added");
      if(result["statusCode"] >= 400 && result["statusCode"]<=499) {
        this.errorMessage = result["errorMessage"] + " Please Login";
        this.reloadSignup();
      } else {
        this.successMessage = "Registration Successfull";
        this.navigateToLogin();
      } 
      
    },(error) => {
      console.log(error);
      this.errorMessage = "Something went wrong please try again!"
    });


  }

  // addBoat(data: any){
  //   //this.adminService.addBoat(data).subscribe((result) => {
  //     console.log('boat added!!');
  //     this.router.navigate(['/admin']);

  //   })
  // }

}
