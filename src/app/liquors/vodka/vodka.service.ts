import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VodkaService {

  constructor() { }
  getVodkas(){
    return [
      {
        name : "Grey Goose",
        image : "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgwODgxNzkxMzk0OTQx/grey-goose-vodka.webp",
        price: 800,
        quantity: 0
      },
      {
        name : "Belvendere",
        image : "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgwODgyMzI1NjQ0NDEz/belvedere-pure-vodka.webp",
        price : 750,
        quantity: 0
      },
      {
        name : "Tripple Eight",
        image : "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkyMjE4MzczNzcyMjg5NTgy/triple-eight-vodka.webp",
        price : 850,
        quantity: 0
      },
      {
        name : "Absolute Elyx",
        image : "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgwODgyMDYwMjg5MTQ5/absolut-elyx-vodka.webp",
        price : 900,
        quantity: 0
      }
    ];
  }
}
