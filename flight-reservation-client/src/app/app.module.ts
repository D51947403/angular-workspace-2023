import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFlightComponent } from './components/find-flight/find-flight.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightService } from './services/flight.service';
import { ReservationService } from './services/reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    FindFlightComponent,
    SearchFlightComponent,
    PassengerDetailsComponent,
    ConfirmReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightService ,ReservationService],
  bootstrap: [FindFlightComponent]
})
export class AppModule { }
