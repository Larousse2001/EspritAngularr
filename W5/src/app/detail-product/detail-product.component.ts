import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!: number
  p!: Product
  constructor(private act:ActivatedRoute, private ps : ProductService, private cps: ConsumerProductService){}

  ngOnInit(){
    this.id = this.act.snapshot.params['id'];
    this.cps.getProductById(this.id).subscribe((data) => this.p=data)
  }
}
