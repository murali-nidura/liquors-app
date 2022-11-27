import { Component, OnInit } from '@angular/core';
import { LiquorsService } from './liquors.service';
import { Liquor } from '../types/Liquors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liquors',
  templateUrl: './liquors.component.html',
  styleUrls: ['./liquors.component.css']
})
export class LiquorsComponent implements OnInit {



  constructor(private  liquorsService : LiquorsService,
    private router : Router) { }

  liquors : Liquor[] = [];

  ngOnInit(): void {
    this.liquors = this.liquorsService.getLiquors();
  }
  
  
  // loadLiquorComponent() {
  //   this.router.navigate(['beers']);
  //   }

  loadLiquorComponent(event: any) {
    var compType : string = event.target.name;
    if(compType=="Beers"){
      this.router.navigate(['beers']);
    }
    else if(compType=="Vodka"){
      this.router.navigate(['vodka']);
    }
    else if(compType=="Rum"){
      this.router.navigate(['rum']);
    }
    else if(compType=="Wines"){
      this.router.navigate(['wines']);
    }
    
  }

}
