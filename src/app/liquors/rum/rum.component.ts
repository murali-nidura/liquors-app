import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { LiquorItem } from 'src/app/types/LiquorItem';
import { RumService } from './rum.service';

@Component({
  selector: 'app-rum',
  templateUrl: './rum.component.html',
  styleUrls: ['./rum.component.css']
})
export class RumComponent implements OnInit {

  rums: LiquorItem[]=[];
  isAlreadyInCart: boolean=false;

  constructor(private rumService : RumService,
    private cartService : CartService,
    private authService: AuthService,
    private router : Router) { }

  ngOnInit(): void {
    this.rums=this.rumService.getRums();
  }
  addToCart(rum: LiquorItem) {
    if(!this.authService.isAuthenticated){
      alert('Please Login to add to cart!');
      this.router.navigate(['login']);
    }
    if(this.cartService.isAlreadyInCart(rum)){
      this.isAlreadyInCart = true;
      return;
    }
    this.cartService.add(rum);
    }

}
