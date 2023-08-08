import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperCaseConverterComponent } from './components/upper-case-converter/upper-case-converter.component';
import { UpperCaseConverterService } from './services/upper-case-converter.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UpperCaseConverterService],
  bootstrap: [UpperCaseConverterComponent]
})
export class AppModule { }
