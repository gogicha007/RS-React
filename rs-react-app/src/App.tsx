import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const clickSearch = () => {
    console.log(query);
  };

  return (
    <>
      <div className="top-control">
        <div className="search-bar">
          <label htmlFor="search">Search the site</label>
          <input
            value={query}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            type="search"
            id="search"
            name='s'
          />
          <button onClick={clickSearch}>Search</button>
        </div>
      </div>
      <div className="results">
        <div className="table"></div>
      </div>
    </>
  );
}

export default App;
