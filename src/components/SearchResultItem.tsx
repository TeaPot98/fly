import { MouseEvent } from "react";
import { SearchResult } from "../types";

const SearchResultItem = (
    { item, onClick }: 
    { item: SearchResult, onClick: (event: MouseEvent<HTMLElement>) => void }
  ) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <li onMouseDown={handleClick}>{item.airportName}</li>
  );
};

export default SearchResultItem;