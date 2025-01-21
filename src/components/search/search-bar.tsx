import styles from './search-bar.module.css';
import { useEffect } from 'react';
import { lsHandler } from '../../utils/localStorageHandler';
import ErrorButton from '../errorButton/errorButton';
import { useCharacterFilters } from '../../hooks/useCharacterFilter';

function SearchBar({ handleSearch }: { handleSearch: () => void }) {
  const { status, setFilters } = useCharacterFilters();

  const clickSearch = async () => {
    console.log('search clicked');
    lsHandler.setValue(status);
    handleSearch();
  };

  const changeInput = (word: string) => {
    console.log('change input');
    setFilters({ page: 1, status: word });
  };

  useEffect(() => {
    const searchWord = lsHandler.getValue();
    setFilters({ page: 1 });
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
          onClick={(e) => {
            e.preventDefault();
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
