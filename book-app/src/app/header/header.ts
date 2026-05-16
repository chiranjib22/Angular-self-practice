import { Component } from '@angular/core';
import { Cart } from '../services/cart';
import { IProduct } from '../catalog/product.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'book-header',
  imports: [RouterLink, RouterLinkActive],
  // template: `<h1 class="color-red">Header</h1>`,
  templateUrl: './header.html',
  // styles:[
  //   `
  //   .color-red {
  //     color: green;
  //   }
  //   `
  // ]
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
