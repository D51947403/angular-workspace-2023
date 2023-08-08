import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductDataService } from '../../services/product-data.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public createResponse :any;
  prodId !: number;
prodName !:string;
prodDesc ! :string;
price !:number;
  constructor(private prodService :ProductDataService){}

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

}
