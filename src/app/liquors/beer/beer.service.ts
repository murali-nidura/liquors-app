import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  
  constructor() { }
  getBeers(){
    return [
      {
        name : "Tuborg",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVtCSLOYdzX2gntuDL_Jr5UDFl9zro6-hIg&usqp=CAU",
        price: 140,
        quantity: 0
      },
      {
        name : "King Fisher",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9wz-N8d6KKdKcx7hSnzi4A_Qfx3DnYSyXQ&usqp=CAU",
        price : 150,
        quantity: 0
      },
      {
        name : "Haywards 5000",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBa0eMK6xMu8o-ytBCfx2soVPXuW38Xvldw&usqp=CAU",
        price : 160,
        quantity: 0
      },
      {
        name : "Budwiser",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I6j_DIYHjOunMbxoxS0od7Q5v7OnUr05B81RTvkdotsqL71D7wz-Yp9SoeeqBV8go1U&usqp=CAU",
        price : 180,
        quantity: 0
      }
    ];
  }
}
