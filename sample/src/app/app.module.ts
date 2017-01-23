import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryPickerComponent, CountryPickerModule } from 'angular2-countrypicker';

@NgModule({
  declarations: [
    AppComponent,
    CountryPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CountryPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
