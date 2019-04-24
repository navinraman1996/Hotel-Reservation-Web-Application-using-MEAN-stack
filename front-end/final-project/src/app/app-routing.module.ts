
import { AdminhomeComponent } from './adminhome/adminhome.component';

import { BookingComponent } from './booking/booking.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AdminaddhotelComponent } from './adminaddhotel/adminaddhotel.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { DeletehotelComponent } from './deletehotel/deletehotel.component';
import { ConfirmbookingComponent } from './confirmbooking/confirmbooking.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'admindetails/:id', component: AdmindetailsComponent},
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'help', component: HelpComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'receipt', component: ReceiptComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminaddhotel', component: AdminaddhotelComponent },
  { path: 'deletehotel/:id', component: DeletehotelComponent },
  { path: 'confirmbooking', component: ConfirmbookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
