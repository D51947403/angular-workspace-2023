import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseStringPipePipe } from './pipes/reverse-string-pipe.pipe';
import { DigitInwordPipe } from './pipes/digit-inword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipePipe,
    DigitInwordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
