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
   this.createProduct()
  }

getProduct() {
  return this.products;
}

 createProduct() {
   this.products.push({id:14,name:"Samsung S10"});
   this.products.push({id:15,name:"Samsung S20"});
   this.products.push({id:16,name:"Samsung S30"});
   this.products.push({id:17,name:"Motorola S40"});
}

}

interface IProduct{
  id :number ;
  name :string;
}