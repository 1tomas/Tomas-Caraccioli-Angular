import { Injectable } from '@angular/core';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartService {

  cartList: Product[] = [];

  constructor() { }

  addToCart(product: Product){
    let item: Product | undefined = this.cartList.find((v1)=>v1.name == product.name);

    if(!item){
      this.cartList.push({...product});
    }else{
      item.quantity += product.quantity;
    }
    console.log(this.cartList);
  }

}
