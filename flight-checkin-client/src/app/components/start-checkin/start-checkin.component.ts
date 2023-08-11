import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-start-checkin',
  templateUrl: './start-checkin.component.html',
  styleUrls: ['./start-checkin.component.css']
})
export class StartCheckinComponent {
 public reservationId ! :number;

  constructor(private service :CheckinService ,private router :Router){}

  public getReservation(){
    this.service.getReservation(this.reservationId).subscribe(
      (response:any) =>{
        this.service.reservationData=response;
        this.router.navigate(['checkIn']);
      },
      (err :HttpErrorResponse) =>{
        console.error(err);
      }
    );
  }
}
