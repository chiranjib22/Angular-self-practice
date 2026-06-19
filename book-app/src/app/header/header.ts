import { Component, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.Emulated,
})
export class Header {
  cartItems!: IProduct[];
  isDark: boolean = false;

  constructor(private cartService: Cart) {
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnInit(): void {}

  ChangeAppTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
  }
}
