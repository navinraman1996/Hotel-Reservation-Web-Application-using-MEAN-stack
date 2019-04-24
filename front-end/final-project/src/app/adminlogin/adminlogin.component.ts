import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit() {
  }
  adminlogin() {   
    const adminuser = {
      username: this.username,
      password: this.password
    };
    console.log(adminuser);
    this.userService.adminlogin(adminuser).subscribe(response => {
      const res1 = JSON.stringify(response);
      const res = JSON.parse(res1);
      console.log(res.isPresent);   
      if (res.isPresent === true) {
        if ( res.correctPassword === true ) {
          localStorage.setItem('adminuser', JSON.stringify(res.user));
          alert('Successfully logged in');
          this.router.navigate(['/adminhome']);
        } else {
          alert('Incorrect password ');
        }
      } else {
        alert('User not found');
      }
    });
  }

  
}
