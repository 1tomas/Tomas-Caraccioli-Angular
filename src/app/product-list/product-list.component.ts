import { Component } from '@angular/core';
import { ProductsCartService } from '../products-cart.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [ 
   {
      name:"Serum",
      description: "Liquido a base de plantas",
      price: 1200,
      stock: 4,
      image: "assets/img/serum.jpeg",
      clearance: false,
      quantity: 0
    },
    {
      name:"Crema Hidratante",
      description: "Crema hidratante a base de almendras",
      price: 1000,
      stock: 3,
      image: "assets/img/serum.jpeg",
      clearance: true,
      quantity: 0
    },
    {
      name:"Agua micelar",
      description: "Liquido a base de rosas",
      price: 800,
      stock: 0,
      image: "assets/img/serum.jpeg",
      clearance: false,
      quantity: 0
    }

  ];


  constructor(private cart: ProductsCartService){

  }

addToCart(product: Product): void{
 this.cart.addToCart(product);
 product.stock -= product.quantity;
 product.quantity = 0;
}

}
