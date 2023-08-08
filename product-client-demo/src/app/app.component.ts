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
public createResponse :any;
public updateResponse :any;
public getProductResponse :any;
public deleteResponse :any;
prodId !: number;
prodName !:string;
prodDesc ! :string;
price !:number;
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
public createProduct(product :any){
  this.prodService.createProducts(product).subscribe(
    (successResponse :any ) => {
      this.createResponse =successResponse;
    },
    (errorResponse :HttpErrorResponse) => {
      console.error(errorResponse);
    }
  );
}

public updateProduct(product :any){
  this.prodService.updateProducts(product).subscribe(
    (successResponse :any ) => {
      this.updateResponse =successResponse;
    },
    (errorResponse :HttpErrorResponse) => {
      console.error(errorResponse);
    }
  );
}

public getProductById(id :number){
  this.prodService.getProductById(id).subscribe(
    (successResponse :any ) => {
      this.getProductResponse =successResponse;
    },
    (errorResponse :HttpErrorResponse) => {
      console.error(errorResponse);
    }
  );
}

public deleteProductById(id :number){
  this.prodService.deleteProducts(id).subscribe(
    (successResponse :any ) => {
      this.deleteResponse=(successResponse ==null ?"Product deleted." :successResponse);
    },
    (errorResponse :HttpErrorResponse) => {
      console.error(errorResponse);
    }
  );
}

}
