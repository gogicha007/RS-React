import styles from './home.module.css';
import SearchBar from '../../components/search/search-bar';
import Results from '../../components/results/results';
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';

function HomePage() {
  const [searchParams, _] = useSearchParams();
  // const [status, setStatus] = useState('')
  console.log(_);
  useEffect(() => {
    console.log(searchParams.get('satus'));
  }, [searchParams]);

  return (
    <>
      <header className={styles.home__top}>
        <SearchBar />
      </header>
      <main>
        {searchParams.get('status') ? (
          <Results searchPar={searchParams} />
        ) : (
          <h1>no search results</h1>
        )}
      </main>
    </>
  );
}

export default HomePage;
