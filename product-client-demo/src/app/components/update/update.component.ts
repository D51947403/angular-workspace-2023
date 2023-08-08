import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ProductDataService } from '../../services/product-data.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public updateResponse :any;
  prodId !: number;
  prodName !:string;
  prodDesc ! :string;
  price !:number;
  constructor(private prodService :ProductDataService){}
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
  
}
