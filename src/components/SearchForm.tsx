import { useEffect, useState } from 'react';

import { AirportSearchResult } from '../types';

import SearchField from './SearchField';
import FlightList from './FlightList';
import styled from 'styled-components';
import Button from './Button';
// import DateInput from './DateInput';

const SearchForm = () => {
  const [ departureAirport, setDepartureAirport ] = useState<AirportSearchResult | null>(null);
  const [ search, setSearch ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [search]);
  
  return (
    <FormContainer>
      <SearchField 
        placeholder="Departure airport" 
        foundItem={departureAirport}
        setFoundItem={setDepartureAirport}
      />
      {/* <SearchField 
        placeholder="Destination"
        foundItem={arrivalAirport}
        setFoundItem={setArrivalAirport}
      />
      <DateInput setDate={setDepartureDate} />
      <DateInput setDate={setArrivalDate} /> */}
      <Button onClick={(_event) => setSearch(true)}>Search</Button>
      <FlightList 
        airportCode={departureAirport && search ? departureAirport.airportCode : ''} 
        search={search}
      />
    </FormContainer>
  );
};

export default SearchForm;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;