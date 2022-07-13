export interface Airport {
  city_code: string;
  country_code: string;
  name_translations: Record<string, string>;
  coordinates: Record<string, number>;
  name: string;
  time_zone: string;
  flightable: boolean;
  code: string;
}

export interface Country {
  code: string;
  name: string;
  currency: string;
  name_translations: Record<string, string>;
  cases: unknown;
}

export interface FlyRoute {
  airline_iata: string;
  airline_icao: string | unknown;
  departure_airport_iata: string;
  departure_airport_icao: string | unknown;
  arrival_airport_iata: string;
  arrival_airport_icao: string | unknown;
  codeshare: boolean;
  transfers: number;
  planes: Array<string>;
}

export interface City {
  code: string;
  country_code: string;
  name_translations: Record<string, string>;
  coordinates: Record<string, number>;
  name: string;
  time_zone: string;
  cases: Record<string, string>;
}

export interface Airline {
  name: unknown | string;
  code: string;
  is_lowcost: boolean;
  name_translations: Record<string, string>;
}

export interface SearchData {
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureDate: string;
  arrivalDate: string;
  currency: string;
}

export interface AppContext {
  countries: Country[] | null;
  cities: City[] | null;
  airports: Airport[] | null;
  flyRoutes: FlyRoute[] | null;
  airlines: Airline[] | null;
  search: SearchData;
}

export interface AirportSearchResult {
  id: string;
  airportName: string;
  airportCode: string;
  cityName: string;
  cityCode: string;
  countryName: string;
  countryCode: string;
}

export interface Flight {
  origin: string;
  destination: string;
  price: number;
  airline: string;
  flight_number: number;
  departure_at: string;
  return_at: string;
  transfers: number;
  expires_at: string;
}

export interface Theme {
  main?: string;
  secondary: Record<string, string>;
}