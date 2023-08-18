import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  
    // Create an array of objects
    salesPersonList: SalesPerson[] = [
      new SalesPerson("Anup", "Kumar", "anup.kumar@gmail.com", 500000),
      new SalesPerson("John", "Doe", "jhon.doe@gmail.com", 400000),
      new SalesPerson("Claire", "Murphy", "claire.murphy",300000),
      new SalesPerson("devendra", "Singraul", "devendra.singraul@gmail.com" ,600000)
    ];



    
}
