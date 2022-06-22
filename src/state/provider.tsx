import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { context } from './context';

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const initialContext = {
    countries: [],
    cities: [],
    airports: [],
    routes: [],
    airlines: [],
  }
  const [data, setData] = useState(initialContext);
  const { Provider } = context;

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
        }
        const { data: airportsFromApi } = await axios.request(options);
        setData(prevState => ({
          ...prevState,
          airports: airportsFromApi,
        }));
        // console.log(airportsFromApi);
      } catch (error: unknown) {
        console.log(error);
      }
    }

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

        const { data: countriesFromApi } = await axios.request(options);
        setData(prevState => ({
          ...prevState,
          countries: countriesFromApi,
        }));
      } catch (error: unknown) {
        console.log(error);
      }
    }

    void fetchAirports();
    void fetchCountries();
  }, []);

  return (
    <Provider value={data}>
      {children}
    </Provider>
  );
}

export default MyProvider;