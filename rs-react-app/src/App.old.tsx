import { useEffect, useState } from 'react';
import { SearchBar } from './components/search-bar/search-bar';
import './App.css';
import { Results } from './components/results-old/results';

function App() {
  const [results, setResults] = useState([] as any[]);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <>
      <div className="top-control">
        <SearchBar setResults={setResults} />
      </div>
      <div className="results">
        <h2>Results</h2>
        {results && results.length > 0 && <Results results = {results}/>}
      </div>
    </>
  );
}

export default App;
