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
  quantityList = [1,2,3,4,5,6,7,8,9,10];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.get().forEach((item)=>{
      this.totalCartValue+=item.price*(item.quantity as number);
    })
  }
  calculateCartValue(event : any){
    this.totalCartValue=0;
    console.log('changed'+event);
    this.cartService.get().forEach((item)=>{
      this.totalCartValue+=item.price*(item.quantity as number);
      console.log(item.quantity);
      console.log(this.totalCartValue);
    });
  }
  
  getCart() {
    // console.log(this.cartService.get());
    return this.cartService.get();
    }
  removeFromCart(liquor : LiquorItem) {
      this.cartService.remove(liquor);
      this.totalCartValue-=liquor.price*(liquor.quantity as number);
  }
  checkOut() {
    alert('check out '+this.totalCartValue);
    }
}
