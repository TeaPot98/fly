// import { useState } from 'react';
import { FormEvent } from 'react';
import { SearchResult } from '../types';
import SearchResultBox from './SearchResultBox';

const SearchField = (
  { list, onChange, value }: 
  { list: SearchResult[], onChange: (event: FormEvent<HTMLInputElement>) => void, value: string}
) => {
  // console.log(list);
  return (
    <div>
      <input 
        type="search"
        placeholder="Where from"
        value={value}
        list="cities"
        onChange={onChange}
      />
      <SearchResultBox list={list} />
    </div>
  );
};

export default SearchField;