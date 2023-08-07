import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  choice:number;
  constructor(){
    this.choice=2;
  }

  ngOnInit(): void {
   
  }

}
