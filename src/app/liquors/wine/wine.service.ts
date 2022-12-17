import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor() { }
  getWines(){
    return [
      {
        name : "Sula Rasa Shiraz",
        image : "https://lh3.googleusercontent.com/ICnsjc0HTOSAU44pjP510GU__cKfpfU_ytYPPuRnmUcO521pTGFUGjM4-1oZ5_RotUt_BT0uRfosp7QAYaqSSiAFKBU=w500-rw",
        price: 770,
        quantity: 0
      },
      {
        name : "Fratelli SETTE",
        image : "https://lh3.googleusercontent.com/iieeOCOLbCPojohDDy7c2LSloVIsRR0j1Xs-VtxAMU3ut6ALxFmjkv8C8vYmKK40Csz4ZKjIO7I2AiK9lCCuBAm33D8=w500-rw",
        price : 150,
        quantity: 0
      },
      {
        name : "KRSMA Sangiovese",
        image : "https://lh3.googleusercontent.com/Fa9tQsTgx0Dga-o5MLxCi9PaaxW3XTIYAXGp_evxcdBtQcfnWKz2Hrr5WvbBq_5orr58Nwn-MaHiuuEyLmoZxemfCA=w500-rw",
        price : 160,
        quantity: 0
      },
      {
        name : "J'NOON White",
        image : "https://lh3.googleusercontent.com/rsupr_it96zHfvvBGTFLPHdMVLt3GaQJtylTm6-_6_uIuSxp_q_8DNahUybR9VOTj7vfbsKwevrZenUdYYhbq2SaT8w=w500-rw",
        price : 180,
        quantity: 0
      }
    ];
  }
}
