import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'book-product-details',
  imports: [NgClass, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductDetails {
  IsDisable: boolean = false;

  @Input() product!: IProduct;

  @Output() buyClicked = new EventEmitter<IProduct>();

  onBuy(product: IProduct) {
    //console.log(product);
    this.buyClicked.emit(product);
  }
}
