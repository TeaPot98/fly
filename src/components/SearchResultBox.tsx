/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// import { useState } from 'react';
import styled from 'styled-components';
import { AirportSearchResult, Theme } from '../types';
import SearchResultItem from './SearchResultItem';

const SearchResultBox = ({ list, selectItem }: { list: AirportSearchResult[], selectItem: (item: AirportSearchResult) => void }) => {
  return (
    <ResultDiv listLength={list.length}>
        <ul>
          {list.map(item => 
            <SearchResultItem 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              key={item.id} 
              item={item} 
              onClick={(_event) => selectItem(item)}
            />
          )}
        </ul>
      </ResultDiv>
  );
};

export default SearchResultBox;

interface Props {
  listLength: number;
  theme: Theme;
}

const ResultDiv = styled.div<Props>`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 90px;
  /* height: 50px; */
  border: ${props => props.listLength > 0 ? `2px solid ${props.theme.secondary.coldMorning}` : 'none'};
  background-color: ${props => props.theme.secondary.lynxWhite};
  max-width: ${props => props.listLength > 0 ? '600px' : '0'};
  max-height: ${props => `${props.listLength * 42}px`};
  transition: max-width, max-height 0.05s ease-in-out;
  border-radius: 10px;
  overflow: hidden;
  
  && ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  };
`;