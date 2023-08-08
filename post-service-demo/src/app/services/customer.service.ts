import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _httpClient:HttpClient) { }

  public getCustomers():any{
     return this._httpClient.get('https://www.w3schools.com/angular/customers.php');
  }
}
