import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { FlightService } from 'src/app/services/flight.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit{

  public flightData :any;
  public reservation :Reservation = new Reservation('','','','','','','','',''); 
  constructor(private flightService:FlightService ,private reservationService:ReservationService,
    private router:Router ,private activatedRoute :ActivatedRoute){}

  ngOnInit(): void {

    this.flightService.getFlightById(Number.parseInt(this.activatedRoute.snapshot.params['id']))
    .subscribe(
    (response :any) => {
      this.flightData=response;
    });
  }

 public onSubmit():any {
      this.reservation.flightId =this.flightData.id;
     this.reservationService.saveReservation(this.reservation).
     subscribe(
      (response :any) => {
       this.router.navigate(['/confirm',response.id]);
      });
    }
}
