import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deletehotel',
  templateUrl: './deletehotel.component.html',
  styleUrls: ['./deletehotel.component.scss']
})
export class DeletehotelComponent implements OnInit {
  contact$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.contact$ = params.id);
   }

  ngOnInit() {
    this.data.deleteHotel(this.contact$).subscribe(
      data => this.contact$ = data)
  }

}
