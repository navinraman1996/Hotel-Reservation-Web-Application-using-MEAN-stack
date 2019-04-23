import { BookingComponent } from './booking/booking.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';
import { AccomodationComponent } from './accomodation/accomodation.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'booking', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
