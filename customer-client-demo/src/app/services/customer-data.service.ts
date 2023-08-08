import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  public baseUrl: string = 'http://localhost:8080/customer-rest-api/customers';

  constructor(private _httpClient: HttpClient) { }

  public createCustomer(customer: Customer): Observable<Object> {
    return this._httpClient.post(this.baseUrl, customer);
  }
  public updateCustomer(customer: Customer): Observable<Object> {
    return this._httpClient.put(this.baseUrl, customer);
  }
  public getCustomerById(custId: number): Observable<Object> {
    return this._httpClient.get(this.baseUrl + '/' + custId);
  }
  public deleteCustomerById(custId: number): Observable<any> {
    return this._httpClient.delete(this.baseUrl + '/' + custId);
  }
  public getAllCustomer(): Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }
}
