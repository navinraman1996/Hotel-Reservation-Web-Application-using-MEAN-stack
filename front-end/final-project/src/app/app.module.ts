import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './material.module';
import { HelpComponent } from './help/help.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { BookingComponent } from './booking/booking.component';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
    SearchComponent,
    HelpComponent,
    AccomodationComponent,
    HelpComponent,
    LoginComponent,
    SignUpComponent,
    DetailsComponent,
    BookingComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
