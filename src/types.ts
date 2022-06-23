export interface Airport {
  city_code: string;
  country_code: string;
  name_translations: Map<string, string>;
  coordinates: Map<string, number>;
  name: string;
  time_zone: string;
  flightable: boolean;
  code: string;
}

export interface Country {
  code: string;
  name: string;
  currency: string;
  name_translations: Map<string, string>;
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
  country_code: string;
  code: string;
  coordinates: Map<string, number>;
  name: string;
  time_zone: string;
  name_translations: Map<string, string>;
  cases: Map<string, string>;
}

export interface Airline {
  name: unknown | string;
  code: string;
  is_lowcost: boolean;
  name_translations: Map<string, string>;
}

export interface AppContext {
  countries: Country[] | null;
  cities: City[] | null;
  airports: Airport[] | null;
  flyRoutes: FlyRoute[] | null;
  airlines: Airline[] | null;
}