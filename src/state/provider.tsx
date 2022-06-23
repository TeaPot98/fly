import { context } from './context';
import useAirports from '../hooks/useAirports';
import useCountries from '../hooks/useCountries';
import useCities from '../hooks/useCities';
import useAirlines from '../hooks/useAirlines';
import useFlyRoutes from '../hooks/useFlyRoutes';

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const { Provider } = context;
  const countries = useCountries();
  const cities = useCities();
  const airports = useAirports();
  const airlines = useAirlines();
  const flyRoutes = useFlyRoutes();

  return (
    <Provider value={{
      airports,
      countries,
      cities,
      airlines,
      flyRoutes
    }}>
      {children}
    </Provider>
  );
};

export default MyProvider;