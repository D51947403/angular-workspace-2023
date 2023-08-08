import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

   // spring boot demo project name is boot-restapi-product
   private basUrl :string ="http://localhost:8080/product-rest-api/products";
  constructor(private _httpClient:HttpClient) { }

  public getProducts():any{
   return this._httpClient.get(this.basUrl);
  }
  public getProductById(id :number):any{
    return this._httpClient.get(this.basUrl+'/'+id);
   }

  public createProducts(product :any):any{
    return this._httpClient.post(this.basUrl,product);
   }
   public updateProducts(product :any):any{
    return this._httpClient.put(this.basUrl,product);
   }

   public deleteProducts(id :number):any{
    return this._httpClient.delete(this.basUrl+'/'+id);
   }
}
