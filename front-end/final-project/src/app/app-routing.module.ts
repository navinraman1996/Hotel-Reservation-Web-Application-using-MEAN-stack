import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
