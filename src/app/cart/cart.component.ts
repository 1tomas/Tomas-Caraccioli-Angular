import { Component } from '@angular/core';
import { observable } from 'rxjs';
import { Product } from '../product-list/product';
import { ProductsCartService } from '../products-cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartList: Product[];

  constructor(private cart: ProductsCartService){

      cart.cartList.subscribe((observable)=>this.cartList = observable);
  }
}
