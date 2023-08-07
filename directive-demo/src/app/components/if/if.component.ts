import { Component, NgZoneOptions, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit{
  x:number; 
  y:number;

  constructor(){
    this.x=10;
    this.y=20;
  }
  
  ngOnInit(): void {
  
  }

}
