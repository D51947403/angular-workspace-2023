import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerDataService } from './services/customer-data.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customer-client-demo';
  
 public customers!: Observable<Customer[]>;

  constructor(private customerService :CustomerDataService){}

  ngOnInit(): void {
     this.customerService.getAllCustomer().subscribe(
      (successResponse ) => {
        this.customers=successResponse;
      },
      (err :HttpErrorResponse) => {
        console.error(err);
      }
     );
  }

}
