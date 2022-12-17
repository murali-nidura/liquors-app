import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartComponent } from 'src/app/cart/cart.component';
import { CartService } from 'src/app/cart/cart.service';
import { LiquorItem } from 'src/app/types/LiquorItem';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  // @Input() beer : LiquorItem = {} as LiquorItem;
  constructor(private beerService : BeerService,
    private cartService: CartService,
    private authService: AuthService,
    private router : Router){};
  beers : LiquorItem[] = [];
  isInCart : boolean = false;
  isAlreadyInCart : boolean = false;
  ngOnInit(): void {
    this.beers = this.beerService.getBeers();
  }
  addToCart(beer : LiquorItem) {
    if(!this.authService.isAuthenticated){
      alert('Please Login to add to cart!');
      this.router.navigate(['login']);
      return;
    }
    if(this.cartService.isAlreadyInCart(beer)){
      this.isAlreadyInCart = true;
      return;
    }
    this.cartService.add(beer);
  }

}
