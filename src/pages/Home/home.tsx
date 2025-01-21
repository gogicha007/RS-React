import styles from './home.module.css';
import { useState } from 'react';
import SearchBar from '../../components/search/search-bar';
import Results from '../../components/results/results';
// import { useCharacterFilters } from '../../hooks/useCharacterFilter';

function HomePage() {
  const [loading, setLoader] = useState(false);
  // const { status } = useCharacterFilters();
  // console.log(status);

  const handleSearch = () => {
    console.log('home page handle search');
    setLoader(true);
  };
  return (
    <>
      <header className={styles.home__top}>
        <SearchBar handleSearch={handleSearch} />
      </header>
      <main>
        <Results loader={loading} />
      </main>
    </>
  );
}

export default HomePage;
