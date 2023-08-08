import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerDataService } from 'src/app/services/customer-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public customer: Customer = new Customer();
  public updateResponse!: Customer;
  constructor(private customerService: CustomerDataService) { }

  public updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(
      (successResponse: any) => {
        this.updateResponse = successResponse;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }
}
