// import { useState } from 'react';
import styled from 'styled-components';
import { SearchResult } from '../types';
import SearchResultItem from './SearchResultItem';

const SearchResultBox = ({ list, selectItem }: { list: SearchResult[], selectItem: (item: SearchResult) => void }) => {
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
}

const ResultDiv = styled.div<Props>`
  /* height: 50px; */
  border: ${props => props.listLength > 0 ? '2px solid black' : 'none'};
  max-width: ${props => props.listLength > 0 ? '300px' : '0'};
  max-height: ${props => `${props.listLength * 20}px`};
  transition: max-width, max-height 0.15s ease-in-out;
  && ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  };
`;