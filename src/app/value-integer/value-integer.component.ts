import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-value-integer',
  templateUrl: './value-integer.component.html',
  styleUrls: ['./value-integer.component.css']
})

export class ValueIntegerComponent {  
  
  @Input()
  quantity: number;
  @Input()
  max: number;
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void{
    if(this.quantity < this.max)
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
  downQuantity(): void{
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity); 
  }
  
}
