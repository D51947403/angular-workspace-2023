import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Criteria } from '../model/criteria';
import { Reservation } from '../model/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 private baseUrl :string ='http://localhost:8080/flight-services/reservations';
 constructor(private _httpClient:HttpClient) { }

public saveReservation(reservation :Reservation):any{
  return this._httpClient.post(this.baseUrl+"/save" ,reservation);
}

}
