import { Injectable } from '@angular/core';
import { LiquorItem } from 'src/app/types/LiquorItem';

@Injectable({
  providedIn: 'root'
})
export class RumService {
  
  constructor() { }
  getRums(): LiquorItem[] {
    return [
      {
        name : "Bacardi Superior Rum",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlh7lU1mxeKZgaGrwn20kULWhORdeRzlNvQ&usqp=CAU",
        price: 1500
      },
      {
        name : "Oka Bay Dark Rum",
        image : "https://luxurycolumnist.com/wp-content/uploads/2022/01/oak-bay-dark-rum-533x800.jpg",
        price : 2000
      },
      {
        name : "Don Q Gold Rum",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLiq84mHrSj9zj7-SRpIP85m4uF68mc0k3Tw&usqp=CAU",
        price : 1600
      },
      {
        name : "Sailor Serry Navy Rum",
        image : "https://luxurycolumnist.com/wp-content/uploads/2022/01/Sailor_Jerry_Spiced_Navy_Rum-530x800.jpg",
        price : 1800
      }
    ];
  }
}
