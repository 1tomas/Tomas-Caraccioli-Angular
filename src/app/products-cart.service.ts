import { Injectable } from '@angular/core';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartService {

  cartList: Product[] = [];

  constructor() { }

  addToCart(product: Product){
    this.cartList.push(product);
    console.log(this.cartList.length);
  }

}
