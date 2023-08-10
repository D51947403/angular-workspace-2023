import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/model/criteria';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']
})
export class FindFlightComponent implements OnInit{

  criteria:Criteria=new Criteria('','','');

  constructor(private flightService :FlightService ,private router :Router){}

  ngOnInit(): void {
  }

  public onSubmit(){
    this.flightService.searchFlights(this.criteria).subscribe(
      (response : any) =>{
        this.flightService.flightData=response;
        console.log(response);
        this.router.navigate(['searchFlights']);
      },
      (err : HttpErrorResponse) =>{
        console.error(err);
      }
    );
  }
}
