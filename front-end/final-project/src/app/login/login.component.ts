import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  constructor(private userService : UserService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router ) { }

  ngOnInit() {
  
  }

  login() {   
    const user = {
      username: this.username,
      password: this.password
    };
    console.log(user);
    this.userService.login(user).subscribe(response => {
      const res1 = JSON.stringify(response);
      const res = JSON.parse(res1);
      console.log(res.isPresent);   
      if (res.isPresent === true) {
        if ( res.correctPassword === true ) {
          localStorage.setItem('user', JSON.stringify(res.user));
          alert('Successfully logged in');
          this.router.navigate(['/']);
        } else {
          alert('Incorrect password ');
        }
      } else {
        alert('User not found');
      }
    });
  }

  
}