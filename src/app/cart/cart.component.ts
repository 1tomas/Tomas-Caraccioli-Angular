import { Component } from '@angular/core';
import { ProductsCartService } from '../products-cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cart: ProductsCartService){}
}
