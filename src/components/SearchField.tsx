/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState, useEffect, useContext, SetStateAction, Dispatch } from 'react';

import { AirportSearchResult } from '../types';
import { searchAirports } from '../utils';
import { context } from '../state/context';

import SearchResultBox from './SearchResultBox';
import styled from 'styled-components';

const SearchField = (
    { placeholder, foundItem, setFoundItem }: 
    { 
      placeholder: string, 
      foundItem: AirportSearchResult | null, 
      setFoundItem: Dispatch<SetStateAction<AirportSearchResult | null>>, 
    }
  ) => {

  const { airports, cities, countries } = useContext(context);
  const [ searchString, setSearchString ] = useState('');
  const [ resultList, setResultList ] = useState<AirportSearchResult[]>([]);

  const handleChange = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setFoundItem(null);
    setSearchString(target.value);
  };

  const handleItemSelect = (item: AirportSearchResult) => {
    setFoundItem(item);
    setResultList([]);
  };
  
  const onFocusOut = () => {
    if (resultList.length > 0) {
      setFoundItem(resultList[0]);
      setSearchString('');
    }
  };

  const onFocus = (event: React.FormEvent): void => {
    const target = event.target as HTMLInputElement;
    target.select();
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

  return (
    <div>
      <StyledInput 
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

const StyledInput = styled.input`
  position: relative;
  height: 50px;
  width: 400px; 
  border-radius: 10px;
  border: 2px solid ${props => props.theme.secondary.coldMorning};
  font-family: inherit;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${props => props.theme.secondary.shishaCoal};
  padding: 1rem;

  &&:focus {
    outline: none;
  };

  ::placeholder {
    color: gray;
  }
`;