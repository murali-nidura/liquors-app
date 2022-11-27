import { Component, Input, OnInit } from '@angular/core';
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
    private cartService: CartService){};
  beers : LiquorItem[] = [];
  ngOnInit(): void {
    this.beers = this.beerService.getBeers();
  }
  addToCart(beer : LiquorItem) {
    console.log(beer);
    this.cartService.add(beer);
  }

}
