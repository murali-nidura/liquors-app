import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
// import {Database, set, ref, update, onValue,remove} from '@angular/fire/database';
import { getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {


  constructor(private restService : RestService) { }
  countries :any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;
  tableSizes: any = [3, 6, 9, 12];
  ngOnInit(): void {
    this.fetchCountries();
    
  }
  fetchCountries() {
    this.restService.getCountries().subscribe((data)=>{
      // console.log(data);
      this.countries=data;
    },(error)=>{
      console.log(error);
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchCountries();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchCountries();
  }
  countryName : string='';
  getCountryInfo(countryName: any) {
    this.countryName=countryName;
    }

    // createInfo() {
    //   //create data
    //   const db = getDatabase();
    // set(ref(db, 'users/' + 'TestUser'), {
    //   username: 'Test User Name',
    //   first_name: 'Test First Name',
    //   last_name : 'Test Last Name' 
    // }); 
    // alert('user created!');
    //   }
}
