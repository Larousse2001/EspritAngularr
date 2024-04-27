import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private ps: ProductService, private rt: Router, private cps: ConsumerProductService) { }

  loginForm = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    like: new FormControl('', Validators.required),
  })

  add() {
    if (this.loginForm.valid) {
      const id = +this.loginForm.value.id!;
      const title = this.loginForm.value.title as string;
      const price = +this.loginForm.value.price!;
      const quantity = +this.loginForm.value.quantity!;
      const like = +this.loginForm.value.like!;

      const newProduct: Product = {
        id: id,
        title: title,
        price: price,
        quantity: quantity,
        like: like
      };

      this.cps.addProduct(newProduct).subscribe(
        () => {
          console.log('Product added successfully');
          this.rt.navigateByUrl('/product');
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }
  }
}
