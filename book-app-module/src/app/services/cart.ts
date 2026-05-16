import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  
  products!:IProduct[];
  Carts: IProduct[] = [];
  baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient){}
 
  add(product:IProduct){
    this.Carts.push(product);
  }

  getCartItems():IProduct[]{
    return this.Carts;
  }

  // getProducts(){
  //   return fetch('http://localhost:3000/api/books')
  // }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.baseUrl}/api/books`);
  }
}
