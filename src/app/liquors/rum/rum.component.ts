import { Component, OnInit } from '@angular/core';
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

  constructor(private rumService : RumService,
    private cartService : CartService) { }

  ngOnInit(): void {
    this.rums=this.rumService.getRums();
  }
  addToCart(rum: LiquorItem) {
    this.cartService.add(rum);
    }

}
