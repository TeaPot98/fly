import { FormEvent, useState, useEffect, useContext, SetStateAction, Dispatch } from 'react';

import { SearchResult } from '../types';
import { searchAirports } from '../utils';
import { context } from '../state/context';

import SearchResultBox from './SearchResultBox';

const SearchField = (
    { placeholder, foundItem, setFoundItem }: 
    { placeholder: string, foundItem: SearchResult | null, setFoundItem: Dispatch<SetStateAction<SearchResult | null>> }
  ) => {
  const {
    airports,
    cities,
    countries,
  } = useContext(context);
  const [ searchString, setSearchString ] = useState('');
  const [ resultList, setResultList ] = useState<SearchResult[]>([]);

  const handleChange = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setFoundItem(null);
    setSearchString(target.value);
  };

  const handleItemSelect = (item: SearchResult) => {
    setFoundItem(item);
    setResultList([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchString.length > 0) {
        setResultList(searchAirports(countries, cities, airports, searchString.toLowerCase()));
      } else {
        setResultList([]);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchString]);

  const onFocusOut = () => {
    if (resultList.length > 0) {
      setFoundItem(resultList[0]);
      setSearchString('');
    }
  };

  const onFocus = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    target.select();
  };

  return (
    <div>
      <input 
        type="text"
        placeholder={placeholder}
        value={foundItem === null ? searchString : foundItem.airportName}
        list="cities"
        onChange={handleChange}
        onBlur={onFocusOut}
        onFocus={onFocus}
      />
      <SearchResultBox 
        list={resultList} 
        selectItem={handleItemSelect}
      />
    </div>
  );
};

export default SearchField;