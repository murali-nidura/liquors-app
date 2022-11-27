import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerComponent } from './beer/beer.component';
import { LiquorsComponent } from './liquors.component';
import { LiquorsService } from './liquors.service';
import { FormsModule } from '@angular/forms';
import { WineComponent } from './wine/wine.component';
import { VodkaComponent } from './vodka/vodka.component';
import { RumComponent } from './rum/rum.component';



@NgModule({
  declarations: [BeerComponent, LiquorsComponent, WineComponent, VodkaComponent, RumComponent],
  providers: [LiquorsService],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LiquorsModule { }
