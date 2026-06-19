import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetails } from '../product-details/product-details';
import { Cart } from '../services/cart';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Catalog implements OnInit, OnDestroy {
  products: IProduct[] = [];
  ProductFilter: string = '';
  cartItems!: IProduct[];

  constructor(
    private cartService: Cart,
    private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap) => {
      this.ProductFilter = paramMap.get('filter') ?? '';
    });
    this.getProducts();
    //this.getFilterProducts();
    //this.products = this.cartService.products;
  }

  // async getProducts(){
  //   const response = await this.cartService.getProducts();
  //   this.products = await response.json();
  //   this.cdr.detectChanges();
  // }

  getProducts() {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.getFilterProducts();
      this.cdr.detectChanges();
    });
  }

  getFilterProducts(): IProduct[] {
    return this.ProductFilter === ''
      ? this.products
      : this.products.filter((product: IProduct) => product?.category == this.ProductFilter);
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }
}
