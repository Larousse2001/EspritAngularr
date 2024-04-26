import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
    id!:number
  constructor(private act:ActivatedRoute){}

  ngOnInit(){
    this.id=this.act.snapshot.params['id']
  }
}
