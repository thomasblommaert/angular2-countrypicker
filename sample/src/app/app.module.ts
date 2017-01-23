import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryPickerModule } from 'angular2-countrypicker';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CountryPickerModule.forRoot(),
    // CountryPickerModule.forRoot({
    //   baseUrl: 'assets/'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
