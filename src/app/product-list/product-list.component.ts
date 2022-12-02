import { Component } from '@angular/core';
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
      clearance: false
    },
    {
      name:"Crema Hidratante",
      description: "Crema hidratante a base de almendras",
      price: 1000,
      stock: 3,
      image: "assets/img/serum.jpeg",
      clearance: true
    },
    {
      name:"Agua micelar",
      description: "Liquido a base de rosas",
      price: 800,
      stock: 0,
      image: "assets/img/serum.jpeg",
      clearance: false
    }

  ]
 

}
