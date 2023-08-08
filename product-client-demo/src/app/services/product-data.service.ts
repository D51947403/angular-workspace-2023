import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

   // spring boot demo project name is boot-restapi-product
   private basUrl ="http://localhost:8080/product-rest-api/products";
  constructor(private _httpClient:HttpClient) { }

  public getProducts():any{
   return this._httpClient.get(this.basUrl);
  }
}
