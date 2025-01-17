// import type { Params } from 'react-router';
import styles from './results.module.css';
import { IFCharacter } from '../../types/interface';
import { Card } from '../card/card';
import { Link, Outlet, useLocation } from 'react-router';
import { getList } from '../../utils/fetcher';
import { useEffect, useState } from 'react';
import { IFResponse } from '../../types/interface';

const Results = () => {
  const [results, setResults] = useState([] as IFCharacter[]);

  const { state } = useLocation();
  const data = state?.data || [];

  console.log(data);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getList('Dead');
        setResults((res as IFResponse).results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log('setResults', results);
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {results.map((obj: IFCharacter) => {
          return (
            <Link to={obj.id.toString()} key={obj.id}>
              <Card {...obj} />
            </Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Results;

// export async function resultsLoader({ params }: { params: Params }) {
//   // const data = await getList('Dead')
//   // console.log('results',data);
//   // return data
// }
