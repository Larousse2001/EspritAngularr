import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProduct:Product[]=
  [
    {id:1,title:'product1',price:100,quantity:10,like:0},
    {id:2,title:'product2',price:200,quantity:20,like:1},
    {id:3,title:'product3',price:300,quantity:30,like:2},
  ]

  constructor() { }


  addProduct(p: Product) {
    this.listProduct.push(p);
  }
}
