import { useEffect, useState } from 'react';
import axios from 'axios';

import { Airport } from '../types';

const useAirports = () => {
  const [airports, setAirports] = useState<null | Airport[]>(null);
  
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airports.json',
          headers: {
            'X-Access-Token': '67cc8afc9add23289eecc7229618b0b5',
            'X-RapidAPI-Key': 'bc3ff00231msh3294756dc10c6d8p1d0077jsn0fa18d906e31',
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
          }
        };
        const { data: airportsFromApi } = await axios.request<Airport[]>(options);
        setAirports(airportsFromApi);
        // console.log(airportsFromApi);
      } catch (error: unknown) {
        console.log(error);
      }
    };
    
    void fetchAirports();
  }, []);

  return airports;
};

export default useAirports;