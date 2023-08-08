import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductDataService } from '../../services/product-data.service';
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {
  public getProductResponse :any;
  prodId !: number;
  constructor(private prodService :ProductDataService){}

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
}
