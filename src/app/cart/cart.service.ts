import { Injectable } from '@angular/core';
import { jsonEval } from '@firebase/util';
import { LiquorItem } from '../types/LiquorItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  constructor() { }
  cart: LiquorItem[] = [];
  isAlreadyInCart(liquor : LiquorItem) : boolean {
    // console.log(this.get());
    if(this.get().find((element)=>{
      return element.name===liquor.name;
    })?.name===liquor.name){
      liquor.isInCart=true;
      return true;
    }
    return false;
  }
  add(liquor: LiquorItem) {
  //   this.cart = this.get();
  //   if(this.cart.length===0){
  //     liquor.quantity=1;
  //     this.cart.push(liquor);
  //   }
  //   else{
  //   this.cart.forEach(existingLiquor=>{
  //     if(existingLiquor.name===liquor.name){
  //       // existingLiquor.quantity=existingLiquor.quantity+1;
  //     }
  //     else{
  //       liquor.quantity=1;
  //       this.cart.push(liquor);
  //     }
  //   });
  // }
      liquor.quantity=1;
      this.cart.push(liquor);
    liquor.isInCart=true;
    setTimeout(()=>{
      liquor.isInCart=false;
    },1000);
    
  }
  get() {
    return this.cart;
  }
  remove(liquor: LiquorItem) {
    this.cart.splice(this.cart.indexOf(liquor),1);
  }
  
}
