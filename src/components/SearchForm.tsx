import React, { FormEvent, useEffect } from 'react';
import { useContext, useState } from 'react';
import { context } from '../state/context';
import SearchField from './SearchField';
import { Airport, City, SearchResult } from '../types';

const SearchForm = () => {
  const {
    airports,
    cities,
  } = useContext(context);
  const [ departureString, setDepartureString ] = useState('');
  const [ departureResult, setDepartureResult ] = useState<SearchResult[]>([]);

  const handleDepartureSearch = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setDepartureString(target.value);
  };

  useEffect(() => {
    // console.log('Use effect');
    const timer = setTimeout(() => {
      // console.log('Set timoute');
      if (departureString.length > 0) {
        setDepartureResult(search(cities, airports, departureString.toLowerCase()));
      } else {
        setDepartureResult([]);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [departureString]);

  const search = (citiesArr: City[] | null, airportsArr: Airport[] | null, str: string) => {
    const foundCities = [];
    const foundAirports = [];
    const output: SearchResult[] = [];
    if (citiesArr) {
      for (let i = 0; i < citiesArr.length; i++) {
        if (citiesArr[i].name_translations.en.toLowerCase().indexOf(str) !== -1) {
          foundCities.push(citiesArr[i]);
        }
      }
    }
    if (airportsArr) {
      for (let i = 0; i < airportsArr.length; i++) {
        if (airportsArr[i].code.toLowerCase().indexOf(str) !== -1) {
          foundAirports.push(airportsArr[i]);
        }
      }
    }
    return output;
  };
  
  return (
    <div>
      <SearchField 
        list={departureResult} 
        value={departureString}
        onChange={handleDepartureSearch}
      />
    </div>
  );
};

export default SearchForm;

