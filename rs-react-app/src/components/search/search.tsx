import { useState } from 'react';
import './search.css';
import { IFData } from '../../types/interface';

interface Props {
  onDataChange: (data: IFData[]) => void;
}

function SearchBar(props: Props) {
  const [inputString, setInputString] = useState('');

  const clickSearch = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/${inputString}`);
    const data = await response.json();
    props.onDataChange(data.results);
  };

  const changeInput = (string: string) => {
    setInputString(string);
  };

  return (
    <div className="search-bar">
      <label htmlFor="search">Search the site</label>
      <input
        value={inputString}
        onInput={(e) => changeInput((e.target as HTMLInputElement).value)}
        type="search"
        id="search"
        name="s"
      />
      <button onClick={clickSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
