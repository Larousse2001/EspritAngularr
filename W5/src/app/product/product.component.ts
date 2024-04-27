import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  priceMax!: number;
  listProduct: Product[] = [];
  alert!: number;

  constructor(
    private ps: ProductService,
    private cs: CalculService,
    private cps: ConsumerProductService
  ) {}

  ngOnInit(): void {
    this.refreshProducts();
  }

  refreshProducts() {
    this.cps.getProducts().subscribe({
      next: (data) => (this.listProduct = data),
      error: (err) => console.log(err),
      complete: () => console.log("Finished")
    });
  }

  increment(i: number) {
    this.listProduct[i].like++;
    const product= this.listProduct[i]
    this.cps.updateProduct(product).subscribe({
      next: () => (
        this.refreshProducts()),
      error: (err) => console.log(err),
      complete: () => console.log("Finished")
    });;
  }

  buy(i: number) {
    this.listProduct[i].quantity--;
    this.cps.updateProduct(this.listProduct[i]);
    const product= this.listProduct[i]
    this.cps.updateProduct(product).subscribe({
      next: () => (
        this.refreshProducts()),
      error: (err) => console.log(err),
      complete: () => console.log("Finished")
    });;
  }

  delete(i: number) {
    const productId = this.listProduct[i].id
    this.cps.deleteProduct(productId).subscribe({
      next: () => (
        this.listProduct.splice(i, 1),
        this.refreshProducts()),
      error: (err) => console.log(err),
      complete: () => console.log("Finished")
    });;
  }

  getProductById(id: number) {
    const product = this.cps.getProductById(id);
  }
}
