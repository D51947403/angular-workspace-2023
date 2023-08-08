import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerDataService } from 'src/app/services/customer-data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  public deleteResponse!: Customer;
  constructor(private customerService: CustomerDataService) { }
  public custId: number = 0;
  public deleteCustomerById() {
    this.customerService.deleteCustomerById(this.custId).subscribe(
      (successResponse: any) => {
        this.deleteResponse = successResponse ==null?"Customer Deleted" :successResponse;
      },
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }
}
