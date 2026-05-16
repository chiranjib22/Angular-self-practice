import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
    IsDisable:boolean = false;
  @Input() product!: IProduct;

  @Output() buyClicked = new EventEmitter<IProduct>();

  onBuy(product:IProduct){
    //console.log(product);
    this.buyClicked.emit(product);
  }
}
