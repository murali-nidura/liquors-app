import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiquorsService {
  
  constructor() { }

  getLiquors(){
    return [{
      image: "/assets/images/beer.jpg",
      name: "Beers"
    },
    {
      image: "/assets/images/wine.jpg",
      name: "Wines"
    },
    {
      image: "/assets/images/vodka.jpg",
      name: "Vodka"
    },
    {
      image: "/assets/images/rum.jpg",
      name: "Rum"
    }
  ];
  }
}
