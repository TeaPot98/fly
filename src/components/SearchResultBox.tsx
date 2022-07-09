// import { useState } from 'react';
import styled from 'styled-components';
import { SearchResult } from '../types';

const SearchResultBox = ({ list }: { list: SearchResult[] }) => {
  return (
    <ResultDiv>
        <ul>
          {list.map((item, i) => 
            <li key={i}>{item.airportName}</li>
          )}
        </ul>
      </ResultDiv>
  );
};

export default SearchResultBox;

const ResultDiv = styled.div`
  height: 50px;
  border: 2px solid black;
  width: 300px;
`;