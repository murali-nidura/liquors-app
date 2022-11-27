import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private httpClient : HttpClient) { }
  getCountries() {
    return this.httpClient.get('https://restcountries.com/v3.1/all');
  }
}
