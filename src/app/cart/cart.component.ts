import { Component, OnInit } from '@angular/core';
import { LiquorItem } from '../types/LiquorItem';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalCartValue : number=0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.get().forEach((item)=>{
      this.totalCartValue+=item.price;
    })
  }
  
  getCart() {
    // console.log(this.cartService.get());
    return this.cartService.get();
    }
  removeFromCart(liquor : LiquorItem) {
      this.cartService.remove(liquor);
  }
  checkOut() {
    alert('check out '+this.totalCartValue);
    }
}
