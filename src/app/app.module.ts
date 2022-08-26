import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerService } from './services/server.service';
import { BoatsService } from './boats.service';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './admin/edit/edit.component';
import { AddComponent } from './add/add.component';
import { AdminService } from './admin.service';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './admin/delete/delete.component';
import { UserService } from './user.service';
import { BookingsComponent } from './bookings/bookings.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingService } from './booking.service';
import {DatePipe} from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    PageNotFoundComponent,
    AdminComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,
    BookingsComponent,
    CheckoutComponent,
    CustomerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule 
    
  ],
  providers: [ServerService, BoatsService, AdminService, UserService, BookingService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
