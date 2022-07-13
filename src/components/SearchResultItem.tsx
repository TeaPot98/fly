/* eslint-disable @typescript-eslint/no-unsafe-return */
import { MouseEvent } from "react";
import styled from "styled-components";
import { AirportSearchResult } from "../types";

const SearchResultItem = (
    { item, onClick }: 
    { item: AirportSearchResult, onClick: (event: MouseEvent<HTMLElement>) => void }
  ) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <StyledResultItem onMouseDown={handleClick}>
      <span>{item.airportName} 
        <span className="list-city-name"> {item.cityName}, </span>
        <span className="list-country-name">{item.countryName}</span>
      </span>
      <span className="list-airport-code">{item.airportCode}</span>
    </StyledResultItem>
  );
};

export default SearchResultItem;

const StyledResultItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  padding: 0px 10px;
  transition: background-color 0.15s ease-in-out;


  &&:hover {
    background-color: ${props => props.theme.secondary.coldMorning};
  }

  && ~ li {
    border-top-style: solid;
    border-top-color: ${props => props.theme.secondary.coldMorning};
    border-top-width: 2px;
  }

  && span {
    color: ${props => props.theme.main};
    font-weight: 500;
  }
  
  && .list-country-name {
    color: lightgrey;
  }

  && .list-city-name {
    color: gray;
  }
  
  && .list-airport-code {
    color: gray;
    font-weight: 500;
  }

  /* &&:last-child {
    padding-bottom: 10px !important;
  } */
`;