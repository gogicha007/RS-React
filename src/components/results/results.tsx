import styles from './results.module.css';
import { IFCharacter, IFRespInfo } from '../../types/interface';
import { Link, Outlet } from 'react-router';
import { getList } from '../../utils/fetcher';
import { useEffect, useState } from 'react';
import { IFResponse } from '../../types/interface';
import { useSearchParams } from 'react-router';
import { lsHandler } from '../../utils/localStorageHandler';
import { Card } from '../card/card';
import Loader from '../loader/loader';
import { Pagination } from '../pagination/pagination';

interface Props {
  searchPar: URLSearchParams;
}

const Results = (props: Props) => {
  const [loading, setLoader] = useState(false);
  const [results, setResults] = useState([] as IFCharacter[]);
  const [responseInfo, setRespInfo] = useState({} as IFRespInfo);
  const [searchParams, _] = useSearchParams();

  console.log(props, _);
  useEffect(() => {
    console.log('props', props);
  }, [results]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        const res = await getList(searchParams.get('status') as string);
        if (res) lsHandler.setValue(searchParams.get('status') as string);
        setTimeout(() => {
          setResults((res as IFResponse).results);
          setRespInfo((res as IFResponse).info);
          setLoader(false);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {results.map((obj: IFCharacter) => {
          return (
            <Link
              to={`?status=${searchParams.get('status')}/${obj.id.toString()}`}
              key={obj.id}
            >
              <Card {...obj} />
            </Link>
          );
        })}
        <Pagination resInfo={responseInfo} />
      </div>
      {loading && <Loader />}
      <Outlet />
    </div>
  );
};

export default Results;
