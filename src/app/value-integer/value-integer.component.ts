import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-value-integer',
  templateUrl: './value-integer.component.html',
  styleUrls: ['./value-integer.component.css']
})

export class ValueIntegerComponent {  
  
  constructor(){
  }
  @Input()
  product: Product;

  upQuantity(product: Product): void{
    if(product.quantity < product.stock)
    product.quantity++;

  }
  dawnQuantity(product: Product): void{
  if(product.quantity > 0)
    product.quantity--;
  
  }
  
}
