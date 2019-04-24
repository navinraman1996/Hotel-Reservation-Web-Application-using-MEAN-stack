import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  loading = false;
  buttionText = "Submit";
  constructor(private http : HttpService) { }

  ngOnInit() {
  }
  register() {
    console.log('inside');
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: localStorage.getItem('username'),
      email: localStorage.getItem('useremail')
    }
    console.log(user);
    this.http.sendEmail("http://localhost:3002/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }



}
