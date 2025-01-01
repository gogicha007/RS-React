import { useState } from 'react';
import { IFCharacter } from '../../types/interface';
import SearchBar from '../../components/search/search';
import ErrorButton from '../../components/errorButton/errorButton';
import Results from '../../components/results/results';
import Loader from '../../components/loader/loader';

function HomePage() {
  const [results, setResults] = useState([] as IFCharacter[]);
  const [loading, setLoader] = useState(false);

  const handleDataChange = (results: IFCharacter[]) => {
    setTimeout(() => {
      setResults(results);
      setLoader(false);
    }, 1000);
  };

  return (
    <>
      <div className="home_top">
        <SearchBar onDataChange={handleDataChange} showLoader={setLoader} />
        <ErrorButton />
      </div>
      <div className="home_results">
        <h2>Results</h2>
        {results && results.length > 0 && <Results data={results} />}
      </div>
      {loading && <Loader />}
    </>
  );
}

export default HomePage;
