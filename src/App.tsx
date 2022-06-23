import { useContext } from 'react';

import { context } from './state/context';

const App = () => {
  const airports = useContext(context);
  console.log(airports);
  return (
    <div className="App">
      {JSON.stringify(airports)}
    </div>
  );
};

export default App;
