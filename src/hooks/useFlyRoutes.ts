import { useEffect, useState } from 'react';
import axios from 'axios';

import { FlyRoute } from '../types';

const useFlyRoutes = () => {
  const [flyRoutes, setFlyRoutes] = useState<null | FlyRoute[]>(null);
  
  useEffect(() => {
    const fetchFlyRoutes = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/routes.json',
          headers: {
            'X-Access-Token': '67cc8afc9add23289eecc7229618b0b5',
            'X-RapidAPI-Key': 'bc3ff00231msh3294756dc10c6d8p1d0077jsn0fa18d906e31',
            'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
          }
        };

        const { data: flyRoutesFromApi } = await axios.request<FlyRoute[]>(options);
        setFlyRoutes(flyRoutesFromApi);
      } catch (error: unknown) {
        console.log(error);
      }
    };
    
    void fetchFlyRoutes();
  }, []);

  return flyRoutes;
};

export default useFlyRoutes;