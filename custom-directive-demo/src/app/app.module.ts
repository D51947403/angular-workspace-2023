import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyifDirective } from './directives/myif.directive';
import { MyLoopDirective } from './directives/my-loop.directive';
import { MyStyleDirective } from './directives/my-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyifDirective,
    MyLoopDirective,
    MyStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
