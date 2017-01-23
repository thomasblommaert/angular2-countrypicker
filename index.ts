import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CountryPickerComponent} from "./src/country-picker.component";
import {CountryPickerService} from "./src/country-picker.service";

export * from './src/country.interface';
export * from './src/country-picker.component';
export * from './src/country-picker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountryPickerComponent
  ],
  exports: [
    CountryPickerComponent
  ]
})
export class CountryPickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountryPickerModule,
      providers: [CountryPickerService]
    };
  }
}
