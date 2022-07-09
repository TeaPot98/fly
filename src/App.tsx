import { useContext } from 'react';
import Home from './components/Home';

import { context } from './state/context';

const App = () => {
  const airports = useContext(context);
  console.log(airports);
  return (
    <div className="App">
      {/* {JSON.stringify(airports)} */}
      <Home />
    </div>
  );
};

export default App;
