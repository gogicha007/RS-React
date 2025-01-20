import styles from './search-bar.module.css';
import { useEffect } from 'react';
import { lsHandler } from '../../utils/localStorageHandler';
import ErrorButton from '../errorButton/errorButton';
import { useCharacterFilters } from '../../hooks/useCharacterFilter';

function SearchBar() {
  const { status, setFilters } = useCharacterFilters();

  const clickSearch = async () => {
    lsHandler.setValue(status);
  };

  const changeInput = (word: string) => {
    setFilters({ status: word });
  };

  useEffect(() => {
    const searchWord = lsHandler.getValue();
    if (!status && searchWord) {
      setFilters({ status: searchWord });
    }
  }, []);

  return (
    <>
      <form className={styles.search__bar}>
        <label htmlFor="search">Search the site</label>
        <input
          value={status}
          onChange={(e) => changeInput(e.target.value)}
          type="search"
          id="search"
          name="status"
        />
        <button
          type="submit"
          onClick={() => {
            clickSearch();
          }}
        >
          Search
        </button>
      </form>
      <ErrorButton />
    </>
  );
}

export default SearchBar;
