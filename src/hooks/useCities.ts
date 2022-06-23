import { useEffect, useState } from 'react';
import axios from 'axios';

import { City } from '../types';

const useCities = () => {
  const [cities, setCities] = useState<null | City[]>(null);
  
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/cities.json',
          headers: {
            'X-Access-Token': '67cc8afc9add23289eecc7229618b0b5',
            'X-RapidAPI-Key': 'bc3ff00231msh3294756dc10c6d8p1d0077jsn0fa18d906e31',
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
          }
        };

        const { data: citiesFromApi } = await axios.request<City[]>(options);
        setCities(citiesFromApi);
      } catch (error: unknown) {
        console.log(error);
      }
    };
    
    void fetchCities();
  }, []);

  return cities;
};

export default useCities;