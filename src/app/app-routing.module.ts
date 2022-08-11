import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './admin/delete/delete.component';
import { EditComponent } from './admin/edit/edit.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'', component:LandingComponent },
  { path:'login', component:LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'profile', component:ProfileComponent },
  { path:'user/:id/booking/:bid', component: CheckoutComponent },
  { path:'admin', component: AdminComponent, children:[
      { path:':id/edit', component: EditComponent },
      { path:':id/edit/delete', component: DeleteComponent }
  ] },
  { path:'admin/delete', component: AdminComponent, children:[
    { path:':id', component: DeleteComponent }
  ] },
  { path:'user/bookings/:id', component: BookingsComponent },
  { path:'admin/add', component:AddComponent },
  { path:'page-not-found', component:PageNotFoundComponent },
  { path:'**',redirectTo:'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
