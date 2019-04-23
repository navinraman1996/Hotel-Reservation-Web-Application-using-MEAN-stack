
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

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'help', component: HelpComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminaddhotel', component: AdminaddhotelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
