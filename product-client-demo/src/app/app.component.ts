import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './services/product-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'product-client-demo';
public products :any;
prodId1: any;
prodName1: any;
prodDesc1: any;
price1: any;
prodId2: any;
prodId3: any;

  constructor(private prodService :ProductDataService){}

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(
      (successResponse :any ) => {
        this.products =successResponse;
      },
      (errorResponse :HttpErrorResponse) => {
        console.error(errorResponse);
      }
    );
  }

}
