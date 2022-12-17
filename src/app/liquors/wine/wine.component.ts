import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { LiquorItem } from 'src/app/types/LiquorItem';
import { WineService } from './wine.service';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  isAlreadyInCart: boolean = false;

  constructor(private wineService : WineService,
    private cartService: CartService,
    private authService: AuthService,
    private router : Router){};
  wines : LiquorItem[] = [];
  ngOnInit(): void {
    this.wines = this.wineService.getWines();
  }
  addToCart(wine : LiquorItem) {
    if(!this.authService.isAuthenticated){
      alert('Please Login to add to cart!');
      this.router.navigate(['login']);
    }
    if(this.cartService.isAlreadyInCart(wine)){
      this.isAlreadyInCart = true;
      return;
    }
    this.cartService.add(wine);
  }

}
