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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log("signup")
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
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
      if(result["statusCode"] >= 400 && result["ststusCode"]<=499) {
        this.errorMessage = result["errorMessage"] + " Please Login";
      } else {
        this.successMessage = "Registration Successfull";
      } 
      this.navigateToLogin();
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
