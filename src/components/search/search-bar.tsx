import styles from './search-bar.module.css';
import { useEffect, useState } from 'react';
import { lsHandler } from '../../utils/localStorageHandler';
import { useSearchParams } from 'react-router';
import ErrorButton from '../errorButton/errorButton';

function SearchBar() {
  const [_, setSearchParams] = useSearchParams();
  const [inputString, setInputString] = useState('');

  console.log(_);
  const clickSearch = async () => {
    setSearchParams({ status: inputString });
  };

  const changeInput = (string: string) => {
    setInputString(string);
  };

  useEffect(() => {
    const searchWord = lsHandler.getValue();
    console.log('search word', searchWord);
    if (searchWord) {
      setInputString(searchWord);
    }
  }, []);

  return (
    <>
      <form className={styles.search__bar}>
        <label htmlFor="search">Search the site</label>
        <input
          value={inputString}
          onInput={(e) => changeInput((e.target as HTMLInputElement).value)}
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
