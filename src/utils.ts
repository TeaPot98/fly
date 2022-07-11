import { v4 as uuidv4 } from 'uuid';
import { Airport, City, Country, SearchResult } from './types';

export const searchAirports = (countriesArr: Country[] | null, citiesArr: City[] | null, airportsArr: Airport[] | null, str: string) => {
  const foundCities = [];
  const foundAirports = [];
  const output: SearchResult[] = [];

  // Searching airports
  if (airportsArr) {
    for (let i = 0; i < airportsArr.length; i++) {
      if (airportsArr[i].code.toLowerCase().indexOf(str) !== -1 && foundAirports.length < 5) {
        foundAirports.push(airportsArr[i]);
      }
    }
  }

  // Adding found airports to the output
  if (citiesArr) {
    for (let i = 0; i < foundAirports.length; i++) {
      for (let j = 0; j < citiesArr.length; j++) {
        if (foundAirports[i].code === citiesArr[j].code) {
          output.push({
            id: uuidv4(),
            airportName: foundAirports[i].name_translations.en,
            airportCode: foundAirports[i].code,
            cityName: citiesArr[j].name_translations.en,
            cityCode: citiesArr[j].code,
            countryName: '',
            countryCode: foundAirports[i].country_code,
          });
        }
      }
    }
  }
  
  // Searching cities
  if (citiesArr) {
    for (let i = 0; i < citiesArr.length; i++) {
      if (citiesArr[i].name_translations.en.toLowerCase().indexOf(str) !== -1 && foundCities.length < 5) {
        foundCities.push(citiesArr[i]);
      }
    }
  }

  // Adding found cities to the output
  if (airportsArr) {
    for (let i = 0; i < foundCities.length; i++) {
      for (let j = 0; j < airportsArr.length; j++) {
        if (foundCities[i].code === airportsArr[j].city_code) {
          output.push({
            id: uuidv4(),
            airportName: airportsArr[j].name_translations.en,
            airportCode: airportsArr[j].code,
            cityName: foundCities[i].name_translations.en,
            cityCode: foundCities[i].code,
            countryName: '',
            countryCode: airportsArr[j].country_code,
          });
        }
      }
    }
  }

  // Adding country name to each search result
  if (countriesArr) {
    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < countriesArr.length; j++) {
        if (output[i].countryCode === countriesArr[j].code) {
          output[i].countryName = countriesArr[j].name_translations.en;
        }
      }
    }
  }

  // export interface SearchResult {
  //   airportName: string;
  //   airportCode: string;
  //   cityName: string;
  //   cityCode: string;
  //   countryName: string;
  //   countryCode: string;
  // }

  return output;
};