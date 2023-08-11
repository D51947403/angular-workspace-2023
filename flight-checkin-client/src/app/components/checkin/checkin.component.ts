import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
 public noOfBags! :number ;
  data :any;
  constructor(private service :CheckinService ,  private router :Router){}
 ngOnInit(): void {
   this.data = this.service.reservationData;
 }
 public checkIn(){
  let checkInRequest ={
    'id' : this.data.id,
    'checkIn' :true,
    'numberOfBags':this.noOfBags
  }
  this.service.checkIn(checkInRequest).subscribe(
    (response :any ) =>{
      this.router.navigate(['/confirmCheckIn']);
    }
  )
 }
}
