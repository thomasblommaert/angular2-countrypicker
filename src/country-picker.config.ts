import { OpaqueToken } from '@angular/core';

export let COUNTRY_PICKER_CONFIG = new OpaqueToken('countrypicker.config');

export class CountryPickerConfig {
    baseUrl: string
}

export const COUNTRY_PICKER_CONFIG_DEFAULT: CountryPickerConfig = {
    baseUrl: 'assets/'
};
