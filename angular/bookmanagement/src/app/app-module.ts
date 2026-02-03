import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/bookreducer';
import { Booklist } from './booklist/booklist';
import { Appstate } from './appstate';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/bookeffects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    App,
    Booklist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<Appstate>({ book: BookReducer }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
