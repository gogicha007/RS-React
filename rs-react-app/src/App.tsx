import SearchBar from './components/search/search';
import Results from './components/results/results';
import ErrorButton from './components/errorButton/errorButton';
import Loader from './components/loader/loader';
import { useEffect, useState } from 'react';
import { IFData } from './types/interface';
import './App.css';

function App() {
  const [results, setResults] = useState([] as IFData[]);
  const [loading, setLoader] = useState(false)

  const handleDataChange = (results: IFData[]) => {
    setResults(results);
    setLoader(false)
  };

  useEffect(()=>{
    if(loading) console.log('its loading bro')
  },[loading])

  return (
    <>
      <div className="top-control">
        <SearchBar onDataChange={handleDataChange} showLoader={setLoader}/>
        <ErrorButton />
      </div>
      <div className="results">
        <h2>Results</h2>
        {results && results.length > 0 && <Results data={results} />}
      </div>
      {loading && <Loader/>}
    </>
  );
}

export default App;
