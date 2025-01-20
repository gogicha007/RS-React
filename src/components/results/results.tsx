import styles from './results.module.css';
import { IFCharacter, IFRespInfo } from '../../types/interface';
import { Link, Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { getList } from '../../utils/fetcher';
import { IFResponse } from '../../types/interface';
// import { lsHandler } from '../../utils/localStorageHandler';
import { Card } from '../card/card';
import Loader from '../loader/loader';
import { Pagination } from '../pagination/pagination';

const Results = () => {
  const [loading, setLoader] = useState(false);
  const [results, setResults] = useState([] as IFCharacter[]);
  const [responseInfo, setRespInfo] = useState({} as IFRespInfo);
  const [noResults, setNoResults] = useState(false);
  const [searchParams, _] = useSearchParams();

  const temp = () => {
    console.log(_);
    console.log('temp');
  };

  async function fetchList() {
    try {
      setLoader(true);
      const res = await getList(searchParams.get('status') as string);
      if (res) {
        console.log(res);
        setTimeout(() => {
          setLoader(false);
          setResults((res as IFResponse).results);
          setRespInfo((res as IFResponse).info);
        }, 1000);
      } else {
        setLoader(false);
        setResults([]);
      }
      setNoResults(!res);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchList();
    temp();
  }, []);

  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {results.length !== 0 &&
          results.map((obj: IFCharacter) => {
            return (
              <Link to={`${obj.id.toString()}`} key={obj.id}>
                <Card {...obj} />
              </Link>
            );
          })}
        {results.length !== 0 && <Pagination resInfo={responseInfo} />}
        {noResults && <h1>No data</h1>}
      </div>
      {loading && <Loader />}
      <Outlet />
    </div>
  );
};

export default Results;
