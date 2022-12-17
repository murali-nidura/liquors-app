import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { LiquorItem } from 'src/app/types/LiquorItem';
import { VodkaService } from './vodka.service';

@Component({
  selector: 'app-vodka',
  templateUrl: './vodka.component.html',
  styleUrls: ['./vodka.component.css']
})
export class VodkaComponent implements OnInit {
  isAlreadyInCart: boolean = false;

  constructor(private vodkaService : VodkaService,
    private cartService: CartService,
    private authService: AuthService,
    private router : Router){};
  vodkas : LiquorItem[] = [];
  ngOnInit(): void {
    this.vodkas = this.vodkaService.getVodkas();
  }
  addToCart(vodka : LiquorItem) {
    if(!this.authService.isAuthenticated){
      alert('Please Login to add to cart!');
      this.router.navigate(['login']);
    }
    if(this.cartService.isAlreadyInCart(vodka)){
      this.isAlreadyInCart = true;
      return;
    }
    this.cartService.add(vodka);
  }

}
