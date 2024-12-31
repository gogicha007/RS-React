import './search.css';
import { useEffect, useState } from 'react';
import { lsHandler } from '../../utils/localStorageHandler';
import { IFData } from '../../types/interface';
import { getList } from '../../utils/fetcher';

interface Props {
  onDataChange: (data: IFData[]) => void;
  showLoader: (value: boolean) => void;
}

function SearchBar(props: Props) {
  const [inputString, setInputString] = useState('');

  const clickSearch = async () => {
    props.showLoader(true);
    const array = await getList(inputString) || [];
    if (array.length > 0) lsHandler.setValue(inputString);
    props.onDataChange(array);
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
    <div className="search-bar">
      <label htmlFor="search">Search the site</label>
      <input
        value={inputString}
        onInput={(e) => changeInput((e.target as HTMLInputElement).value)}
        type="search"
        id="search"
        name="s"
      />
      <button onClick={clickSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
