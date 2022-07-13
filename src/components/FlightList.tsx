import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react'; 
import styled from 'styled-components';

import { Flight } from "../types";
import FlightComponent from './FlightComponent';

const FlightList = ({ airportCode, search }: { airportCode: string, search: boolean }) => {
  const [popularFlights, setFlights] = useState<Flight[]>([]);
  
  useEffect(() => {
    const fetchFlights = async () => {
      console.log('Starting fetch');
      try {
        if (airportCode !== '') {
          const options = {
            method: 'GET',
            url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions',
            params: {currency: 'EUR', origin: airportCode},
            headers: {
              'X-Access-Token': '67cc8afc9add23289eecc7229618b0b5',
              'X-RapidAPI-Key': 'bc3ff00231msh3294756dc10c6d8p1d0077jsn0fa18d906e31',
              'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
            }
          };
          const response = await axios.request<AxiosResponse>(options);
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
          console.log('Data from popular flights >>> ', Object.values(response.data.data));
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
          setFlights(Object.values(response.data.data));
          // console.log(flightsFromApi);
        }
      } catch (error: unknown) {
        console.log(error);
      }
    };
    
    void fetchFlights();
  }, [search]);

  return (
    <StyledList>
      {popularFlights.map(flight => 
        <FlightComponent key={`${flight.price + flight.flight_number}`} flight={flight} />
      )}
    </StyledList>
  );
};

export default FlightList;

const StyledList = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 70px;
  padding: 15px;
  
  && li ~ li {
    margin-top: 10px;
  }
`;