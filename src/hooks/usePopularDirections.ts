import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { Flight } from '../types';

const usePopularDirections = (departure: string) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        if (departure !== '') {
          const options = {
            method: 'GET',
            url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions',
            params: {currency: 'EUR', origin: departure},
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
  }, []);

  return flights;
};

export default usePopularDirections;