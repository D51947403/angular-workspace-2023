import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criteria } from '../model/criteria';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl: string = 'http://localhost:8080/flight-services/flights';
  
  public flightData:any;
  public test:any="test data";
  constructor(private _httpClient: HttpClient) { }

  public searchFlights(criteria: Criteria): any {
    return this._httpClient.get(this.baseUrl + "/search?departureCity=" + criteria.departureCity + "&arrivalCity=" + criteria.arrivalCity
      + "&dateOfDeparture=" + criteria.dateOfDeparture);
  }
  public getFlightById(id: number): any {
    return this._httpClient.get(this.baseUrl + "/" + id);
  }
  
}
