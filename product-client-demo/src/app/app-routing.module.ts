import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { DeleteComponent } from './components/delete/delete.component';

// default path   {path:'',redirectTo:''},
const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'create',component:CreateComponent} ,
  {path:'update',component:UpdateComponent} ,
  {path:'fetch',component:FetchComponent} ,
  {path:'delete',component:DeleteComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
