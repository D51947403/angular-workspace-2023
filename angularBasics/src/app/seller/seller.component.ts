import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit{
  sellers :string[];
  hide:boolean;
  ngOnInit(): void {

  }
  constructor(){
    this.sellers=['Amazon' , 'Flipcart','BestBuys','Albestron'];
    this.hide=true;
  }
  toggle(){
    this.hide=!this.hide;
  }
}
