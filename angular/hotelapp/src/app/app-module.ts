import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// these are necessary, but only later
import { HomemodModule } from './homemod/homemod-module';
import { ReservationmodModule } from './reservationmod/reservationmod-module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomemodModule,
    ReservationmodModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
