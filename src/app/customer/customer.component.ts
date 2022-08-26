import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerName: string;
  cusId: number;
  email: string;
  phone: string;
  userName:string;
  deleteCustomerNumber:number;
  customerDeleted:boolean=false;

  constructor( private adminService: AdminService ) { }

  deleteCustomerDone(value: boolean){
    this.customerDeleted=value;
  }

  customers: any[];
  loading: boolean = false;
  errorMessage;
  p: number;

  

  deleteCustomer(id: number){
    console.log("delete customer ="+id)
    this.adminService.deleteCustomer(id).subscribe((res) => {
      console.log(res);
      this.deleteCustomerNumber=id;
      
      this.deleteCustomerDone(true);
      setTimeout(() => {
        this.deleteCustomerDone(false);
        window.location.reload();
      },2000);
    });
  }

  getCustomers(){
    this.loading = true;
    this.errorMessage = "";
    this.adminService.getCustomers().subscribe((res) => {
      this.customers = res;
      
      console.log("customers fetches = "+this.customers);
    },
    (error) => {
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}
