import styles from './results.module.css';
import { IFCharacter, IFRespInfo } from '../../types/interface';
import { Link, Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import { getList } from '../../utils/fetcher';
import { IFResponse } from '../../types/interface';
import { Card } from '../card/card';
import Loader from '../loader/loader';
import { Pagination } from '../pagination/pagination';
import { useCharacterFilters } from '../../hooks/useCharacterFilter';

const Results = () => {
  const { status } = useCharacterFilters();
  const [loading, setLoader] = useState(false);
  const [results, setResults] = useState([] as IFCharacter[]);
  const [responseInfo, setRespInfo] = useState({} as IFRespInfo);
  const [noResults, setNoResults] = useState(false);

  const temp = () => {
    console.log('temp');
  };

  async function fetchList() {
    try {
      setLoader(true);
      const res = await getList(status as string);
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
              <Link
                to={`/?status=${status}&id${obj.id.toString()}`}
                key={obj.id}
              >
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
