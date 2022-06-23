import { createContext } from 'react';

import { AppContext } from '../types';

export const context = createContext<AppContext | null>(null);