import ReactDOM from 'react-dom/client';
import App from './App';
import MyProvider from './state/provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MyProvider>
    <App />
  </MyProvider>
);

