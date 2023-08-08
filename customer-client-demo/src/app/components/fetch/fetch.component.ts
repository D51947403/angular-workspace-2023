import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerDataService } from 'src/app/services/customer-data.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {
  public fetchResponse!: Customer;
  constructor(private customerService: CustomerDataService) { }
  public custId: number = 0;
  public getCustomerById() {
    this.customerService.getCustomerById(this.custId).subscribe(
      (successResponse: any) => {
        this.fetchResponse = successResponse;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }
}
