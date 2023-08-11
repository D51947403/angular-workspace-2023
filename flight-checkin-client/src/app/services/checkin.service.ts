import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  public reservationData: any;
  private baseUrl = 'http://localhost:8080/flight-services/reservations';
  constructor(private _httpClient: HttpClient) { }

  public getReservation(id: number): any {
    return this._httpClient.get(this.baseUrl + '/' + id);
  }

  public checkIn(checkInRequest: any): any {
    return this._httpClient.put(this.baseUrl+"/update", checkInRequest);
  }

}
