import styles from './search-bar.module.css';
import { useEffect, useState } from 'react';
import { lsHandler } from '../../utils/localStorageHandler';
import { useSearchParams } from 'react-router';
import ErrorButton from '../errorButton/errorButton';

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputString, setInputString] = useState('');

  const clickSearch = async () => {
    console.log('click search');
    console.log(searchParams);
    // setSearchParams({ status: inputString });
    // setInputString(searchParams.get('status') as string)
  };

  const changeInput = (string: string) => {
    console.log('change input');
    setInputString(string);
    setSearchParams({ status: inputString });
  };

  useEffect(() => {
    const searchWord = lsHandler.getValue();
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
