import { useEffect, useState } from 'react';
import axios from 'axios';

import { Airline } from '../types';

const useAirlines = () => {
  const [airlines, setAirlines] = useState<null | Airline[]>(null);
  
  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airlines.json',
          headers: {
            'X-Access-Token': '67cc8afc9add23289eecc7229618b0b5',
            'X-RapidAPI-Key': 'bc3ff00231msh3294756dc10c6d8p1d0077jsn0fa18d906e31',
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
          }
        };

        const { data: airlinesFromApi } = await axios.request<Airline[]>(options);
        setAirlines(airlinesFromApi);
      } catch (error: unknown) {
        console.log(error);
      }
    };
    
    void fetchAirlines();
  }, []);

  return airlines;
};

export default useAirlines;