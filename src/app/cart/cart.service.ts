import { Injectable } from '@angular/core';
import { LiquorItem } from '../types/LiquorItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }
  cart: LiquorItem[] = [];
  add(liquor: LiquorItem) {
    this.cart.push(liquor);
  }
  get() {
    return this.cart;
  }
  remove(liquor: LiquorItem) {
    this.cart.splice(this.cart.indexOf(liquor),1);
  }
  
}
