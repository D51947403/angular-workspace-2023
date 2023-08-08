import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

import { HttpErrorResponse } from '@angular/common/http';
import { UpperCaseConverterService } from 'src/app/services/upper-case-converter.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  public customers :any;
  public countryData :any;
  
constructor(private customerService :CustomerService ,private upperCaseService :UpperCaseConverterService){

};

  ngOnInit(): void {
  //  this.getCustomer();
  forkJoin(
    this.customerService.getCustomers(),this.upperCaseService.convertToUpperCase('india'))
    .subscribe(
      (response :any) =>{
        this.customers =response[0];
        this.countryData =response[1];
      }
    );
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
