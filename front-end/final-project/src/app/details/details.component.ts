import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  contact$: Object; //creating a variable attribute of type object in type script

  /** The purpose of this code allows us to grab the id router parameter that we defined in the app's routing file earlier. 
   * This will give us access to the user ID and then pass it to the getUser() method that we defined.*/
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.contact$ = params.id);
   }

  ngOnInit() {
    /**we're calling our getContact() method and subscribing to it. Inside, we're binding our user$ object to the result returned by the API. */
    this.data.getContact(this.contact$).subscribe(
      data => this.contact$ = data
    )
  }
}
