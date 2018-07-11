import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvmazeModule } from 'projects/tvmaze/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TvmazeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
