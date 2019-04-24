import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSideNavigation = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onToggleClose() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);

  }
}
