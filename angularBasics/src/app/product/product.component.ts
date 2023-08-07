import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products :IProduct[];

  constructor(){
    this.products=[
      {
        id:11,
        name :"MacBook Pro"
      },
      {
        id:12,
        name:"IPhone 7"
      },
      {
        id :13 ,
        name :"HP Laptop"
      }
    ];
  }

  ngOnInit(): void {
  
  }

getProduct() {
  return this.products;
}

}

interface IProduct{
  id :number ;
  name :string;
}