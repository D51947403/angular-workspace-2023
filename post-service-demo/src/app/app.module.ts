import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperCaseConverterComponent } from './components/upper-case-converter/upper-case-converter.component';
import { UpperCaseConverterService } from './services/upper-case-converter.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseConverterComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UpperCaseConverterService ,CustomerService],
  bootstrap: [UpperCaseConverterComponent,CustomerComponent]
})
export class AppModule { }
