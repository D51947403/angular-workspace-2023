import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit{

  searchedData :any;
  constructor(private flightService :FlightService ,private router :Router){}
  ngOnInit(): void {
   // console.log(this.flightService.flightData);
    console.log(this.flightService.test);
    this.searchedData=this.flightService.flightData;
  }

  public onSelect(flightId:number):any {
    console.log("flightId "+flightId);
    this.router.navigate(['passengerDetails/'+flightId]);
    }
}
