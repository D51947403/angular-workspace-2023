import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UpperCaseConverterService {

  constructor(private _httpClient:HttpClient) { }

  public convertToUpperCase(countryName :string):any{
    // this api is not available now 
  // return this._httpClient.post('http://test-routes.herokuapp.com/test/uppercase' ,obj);
  return this._httpClient.get('https://restcountries.com/v3.1/name/'+countryName );
  }
}
