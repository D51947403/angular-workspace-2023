import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartCheckinComponent } from './components/start-checkin/start-checkin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmCheckinComponent } from './components/confirm-checkin/confirm-checkin.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'startCheckIn' ,component:StartCheckinComponent},
  {path:'checkIn' ,component:CheckinComponent} ,
  {path :'confirmCheckIn',component:ConfirmCheckinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
