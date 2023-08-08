import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _httpClient:HttpClient) { }

  // restfull call to consume countries data 
  public getCountries():any{
    return this._httpClient.get("https://restcountries.com/v2/all");
  }

}
