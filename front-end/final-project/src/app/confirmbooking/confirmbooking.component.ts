import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-confirmbooking',
  templateUrl: './confirmbooking.component.html',
  styleUrls: ['./confirmbooking.component.scss'],
})
export class ConfirmbookingComponent implements OnInit {
  addctForm : FormGroup;
  constructor() { }

  ngOnInit() {
  
  }


}
