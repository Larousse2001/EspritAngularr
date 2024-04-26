import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
priceMax!:number
listProduct:Product[]=
[
  {id:1,title:'product1',price:100,quantity:10,like:0},
  {id:2,title:'product2',price:200,quantity:20,like:1},
  {id:3,title:'product3',price:300,quantity:30,like:2},
]

increment(i:number){
  console.log(i)
    this.listProduct[i].like++
}
buy(i:number){

  console.log(i)
    this.listProduct[i].quantity--
}
}
