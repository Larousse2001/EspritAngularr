import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-apartment',
  templateUrl: './detail-apartment.component.html',
  styleUrls: ['./detail-apartment.component.css']
})
export class DetailApartmentComponent implements OnInit {
  apartmentId: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apartmentId = params['id'];
    });
  }
}
