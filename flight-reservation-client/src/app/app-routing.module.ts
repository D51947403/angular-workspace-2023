import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFlightComponent } from './components/find-flight/find-flight.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'findFlights', component:FindFlightComponent} ,
  {path:'searchFlights', component:SearchFlightComponent} ,
  {path:'passengerDetails/:id', component:PassengerDetailsComponent} ,
  {path:'confirm/:id', component:ConfirmReservationComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
