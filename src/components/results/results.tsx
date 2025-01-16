import type { Params } from 'react-router';
import styles from './results.module.css';
import { IFCharacter } from '../../types/interface';
import { Card } from '../card/card';
import { Link, Outlet, useLocation } from 'react-router';

function Results() {
  const { state } = useLocation();
  const data = state?.data || [];
  console.log(state?.pagination || 'null');
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {data.map((obj: IFCharacter) => {
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
}

export default Results;

export async function resultsLoader({ params }: { params: Params }) {
  console.log(params);
}
