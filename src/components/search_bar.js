import React from 'react';

const SearchBar = (props) => {
  return (
    <input onChange={
      (event) => props.onInput(event.target.value) 
    }></input>
  );
}

export default SearchBar;
