import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { AtmComponent } from './components/atm/atm.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    SwitchComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
