import { createContext } from 'react';

import { AppContext } from '../types';

const initialContext = {
  countries: [],
  cities: [],
  airports: [],
  flyRoutes: [],
  airlines: [],
};

export const context = createContext<AppContext>(initialContext);