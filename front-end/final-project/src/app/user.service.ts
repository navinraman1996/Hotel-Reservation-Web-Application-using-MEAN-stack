import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3001/api/users', user, {headers: headers});
  }

  login(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3001/api/login', user, {headers: headers});
  }

  loggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user != null ? true : false;
  }
  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  getLoggedInAdminUser() {
    return JSON.parse(localStorage.getItem('adminuser'));
  }

  getUsers() {
    return this.http.get('http://localhost:3001/api/users');
  }

  getChatRoomsChat(chatRoom) {
    return this.http.get('http://localhost:3001/chatroom/' + chatRoom);
  }
  adminlogin(adminuser) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3001/api/login', adminuser, {headers: headers});
  }
  adminloggedIn() {
    const user = JSON.parse(localStorage.getItem('adminuser'));
    return user != null ? true : false;
  }
}