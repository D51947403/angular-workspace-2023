import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerDataService } from 'src/app/services/customer-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public customer: Customer = new Customer();
  public createResponse!: Customer;
  constructor(private customerService: CustomerDataService) { }

  public createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      (successResponse: any) => {
        this.createResponse = successResponse;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }

}
