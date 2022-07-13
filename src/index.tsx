import ReactDOM from 'react-dom/client';

import MyProvider from './state/provider';
import { Theme } from './types';
import './global.css';

import App from './App';
import { ThemeProvider } from 'styled-components';

const theme: Theme = {
  main: '#1da1f2',
  secondary: {
    red: '#ff4b4b',
    barcelonaOrange: '#ff9600',
    yellow: '#ffc800',
    purple: '#a9a1ff',
    green: '#58cc02',
    pink: '#ffc7ff',
    marine: '#042c60',
    shishaCoal: '#3c3c3c',
    lynxWhite: '#f7f7f7',
    coldMorning: '#e5e5e5',
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MyProvider>
    <ThemeProvider theme={theme}>
      <App /> 
    </ThemeProvider>
  </MyProvider>
);


