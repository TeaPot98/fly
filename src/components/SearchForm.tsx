import React, { FormEvent, useEffect } from 'react';
import { useContext, useState } from 'react';
import { context } from '../state/context';
import SearchField from './SearchField';
import { SearchResult } from '../types';
import { searchAirports } from '../utils';

const SearchForm = () => {
  const {
    airports,
    cities,
    countries,
  } = useContext(context);
  const [ departureString, setDepartureString ] = useState('');
  const [ departureResult, setDepartureResult ] = useState<SearchResult[]>([]);

  const handleDepartureSearch = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setDepartureString(target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (departureString.length > 0) {
        setDepartureResult(searchAirports(countries, cities, airports, departureString.toLowerCase()));
      } else {
        setDepartureResult([]);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [departureString]);
  
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

