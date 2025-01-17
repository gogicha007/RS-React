import styles from './search-bar.module.css';
import { useEffect, useState } from 'react';
import { lsHandler } from '../../utils/localStorageHandler';
import { IFResponse } from '../../types/interface';
import { getList } from '../../utils/fetcher';
import { useSearchParams } from 'react-router';

interface Props {
  onDataChange: (data: IFResponse) => void;
  showLoader: (value: boolean) => void;
}

function SearchBar(props: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputString, setInputString] = useState('');

  const clickSearch = async () => {
    props.showLoader(true);
    console.log('search params', searchParams);
    const res = await getList(inputString);
    if (res) lsHandler.setValue(inputString);
    setSearchParams({ status: inputString });
    props.onDataChange(res as IFResponse);
  };

  const changeInput = (string: string) => {
    setInputString(string);
  };

  useEffect(() => {
    const searchWord = lsHandler.getValue();
    if (searchWord) {
      setInputString(searchWord);
    }
  }, []);

  return (
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
  );
}

export default SearchBar;
