import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductDataService } from '../../services/product-data.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  public deleteResponse :any;
  prodId !: number;
  constructor(private prodService :ProductDataService){}
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
