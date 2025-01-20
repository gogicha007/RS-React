import styles from './home.module.css';
import SearchBar from '../../components/search/search-bar';
import Results from '../../components/results/results';
import { useCharacterFilters } from '../../hooks/useCharacterFilter';

function HomePage() {
  const { status } = useCharacterFilters();
  console.log(status);

  return (
    <>
      <header className={styles.home__top}>
        <SearchBar />
      </header>
      <main>
        <Results />
      </main>
    </>
  );
}

export default HomePage;
