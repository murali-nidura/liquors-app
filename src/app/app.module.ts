import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LiquorsModule } from './liquors/liquors.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { RestComponent } from './rest/rest.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CartComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LiquorsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
