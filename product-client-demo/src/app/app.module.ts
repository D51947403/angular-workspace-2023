import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDataService } from './services/product-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
