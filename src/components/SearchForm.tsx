import { useState } from 'react';
import SearchField from './SearchField';
import { SearchResult } from '../types';
import DateInput from './DateInput';

const SearchForm = () => {
  const [ departureAirport, setDepartureAirport ] = useState<SearchResult | null>(null);
  const [ arrivalAirport, setArrivalAirport ] = useState<SearchResult | null>(null);
  const [ , setDepartureDate ] = useState('');
  const [ , setArrivalDate ] = useState('');
  
  return (
    <div>
      <SearchField 
        placeholder="Where from" 
        foundItem={departureAirport}
        setFoundItem={setDepartureAirport}
      />
      <SearchField 
        placeholder="Destination"
        foundItem={arrivalAirport}
        setFoundItem={setArrivalAirport}
      />
      <DateInput setDate={setDepartureDate} />
      <DateInput setDate={setArrivalDate} />
    </div>
  );
};

export default SearchForm;

