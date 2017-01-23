import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

import { ICountry } from './country.interface';
import { CountryPickerService } from './country-picker.service';

@Component({
  selector: 'countryPicker',
  template: `<select class="form-control form-control-sm">
                <option *ngFor="let c of countries; let i = index;" [value]="getValue(c)"><img [hidden]="!flag" src="{{c.cca3}}">getName(c)</option>
            </select>`
})
export class CountryPickerComponent {

  @Input() flag: boolean = false;
  @Input() value: string = 'cca3';
  @Input() name: string = 'name.common';

  public countries: ICountry[];

  constructor(private countryPickerService: CountryPickerService) {
    this.countryPickerService.getCountries().subscribe(countries => this.countries = countries);
  }

  public getValue(obj: ICountry) {
    _.get(obj, this.value);
  }

  public getName(obj: ICountry) {
    _.get(obj, this.name);
  }

}
