import styles from './home.module.css';
import SearchBar from '../../components/search/search-bar';
import Results from '../../components/results/results';

function HomePage() {
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
