import { useEffect, useState } from 'react';
import axios from 'axios';

import { Country } from '../types';

const useCountries = () => {
  const [countries, setCountries] = useState<null | Country[]>(null);
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/countries.json',
          headers: {
            'X-Access-Token': '67cc8afc9add23289eecc7229618b0b5',
            'X-RapidAPI-Key': 'bc3ff00231msh3294756dc10c6d8p1d0077jsn0fa18d906e31',
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
          }
        };
        const { data: airportsFromApi } = await axios.request<Country[]>(options);
        setCountries(airportsFromApi);
        // console.log(airportsFromApi);
      } catch (error: unknown) {
        console.log(error);
      }
    };
    
    void fetchCountries();
  }, []);

  return countries;
};

export default useCountries;