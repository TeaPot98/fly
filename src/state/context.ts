import { createContext } from 'react';

import { AppContext } from '../types';

const initialContext = {
  countries: [],
  cities: [],
  airports: [],
  flyRoutes: [],
  airlines: [],
  search: {
    departureAirportCode: '',
    arrivalAirportCode: '',
    departureDate: '',
    arrivalDate: '',
    currency: '',
  },
};

export const context = createContext<AppContext>(initialContext);