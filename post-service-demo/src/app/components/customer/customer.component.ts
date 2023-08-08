import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

import { HttpErrorResponse } from '@angular/common/http';
import { UpperCaseConverterService } from 'src/app/services/upper-case-converter.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  public customers :any;
  
constructor(private customerService :CustomerService ,private upperCaseService :UpperCaseConverterService){

};

  ngOnInit(): void {
    this.getCustomer();
  }

  public getCustomer():any{
     this.customerService.getCustomers().subscribe(
        (response :any) => {
      this.customers=response;
        },
        (err :HttpErrorResponse) => {
         console.error(err);
        }
     );
  }
}
