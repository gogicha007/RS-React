import SearchBar from './components/search/search';
import Results from './components/results/results';
import './App.css';
import { useState } from 'react';
import { IFData } from './types/interface';
import ErrorButton from './components/errorButton/errorButton';

function App() {
  const [results, setResults] = useState([] as IFData[]);

  const handleDataChange = (results: IFData[]) => {
    setResults(results);
  };

  return (
    <>
      <div className="top-control">
        <SearchBar onDataChange={handleDataChange} />
        <ErrorButton />
      </div>
      <div className="results">
        <h2>Results</h2>
        {results && results.length > 0 && <Results data={results} />}
      </div>
    </>
  );
}

export default App;
