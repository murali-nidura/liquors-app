import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { BeerComponent } from './liquors/beer/beer.component';
import { LiquorsComponent } from './liquors/liquors.component';
import { RumComponent } from './liquors/rum/rum.component';
import { VodkaComponent } from './liquors/vodka/vodka.component';
import { WineComponent } from './liquors/wine/wine.component';
import { RestComponent } from './rest/rest.component';

const routes: Routes = [
  {path:'',component:LiquorsComponent},
  {path:'cart',component:CartComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'beers',component:BeerComponent},
  {path:'vodka',component:VodkaComponent},
  {path:'wines',component:WineComponent},
  {path:'rum',component:RumComponent},
  {path:'rest',component:RestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
