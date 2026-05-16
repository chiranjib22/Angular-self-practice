import { Component } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartItems!:IProduct[]

  constructor(private cartService:Cart) {
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnInit(): void {
  }
}
