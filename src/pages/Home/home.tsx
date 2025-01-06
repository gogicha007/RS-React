import { useState } from 'react';
import { IFCharacter, IFRespInfo, IFResponse } from '../../types/interface';
import SearchBar from '../../components/search/search';
import ErrorButton from '../../components/errorButton/errorButton';
import Results from '../../components/results/results';
import Loader from '../../components/loader/loader';
import styles from './home.module.css';
import { Pagination } from '../../components/pagination/pagination';

function HomePage() {
  const [responseInfo, setRespInfo] = useState({} as IFRespInfo);
  const [results, setResults] = useState([] as IFCharacter[]);
  const [loading, setLoader] = useState(false);

  const handleDataChange = (res: IFResponse) => {
    setTimeout(() => {
      setRespInfo(res ? res.info : ({} as IFRespInfo));
      setResults(res ? res.results : []);
      setLoader(false);
    }, 1000);
  };

  return (
    <>
      <div className={styles.home}></div>
      <div className={styles.home__top}>
        <SearchBar onDataChange={handleDataChange} showLoader={setLoader} />
        <ErrorButton />
      </div>
      <div className={styles.home__results}>
        <h2>Results</h2>
        {results && results.length > 0 && <Results data={results} />}
      </div>
      <div className={styles.home__pagination}>
        <Pagination
          onPageChange={handleDataChange}
          showLoader={setLoader}
          resInfo={responseInfo}
        />
      </div>
      {loading && <Loader />}
    </>
  );
}

export default HomePage;
