import { useState, Dispatch, SetStateAction } from 'react';

import './search-bar.css';

type SetPropsType = {
  setResults: Dispatch<SetStateAction<any[]>>;
};

export const SearchBar = ({setResults}: SetPropsType) => {
  const [input, setInput] = useState('');
  
  const clickSearch = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/${input}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div className="search-bar">
      <label htmlFor="search">Search the site</label>
      <input
        value={input}
        onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        type="search"
        id="search"
        name="s"
      />
      <button onClick={clickSearch}>Search</button>
    </div>
  );
};
