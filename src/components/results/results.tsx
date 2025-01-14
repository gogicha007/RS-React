import styles from './results.module.css';
import { IFCharacter } from '../../types/interface';
import { Card } from '../card/card';
import { Link, useLocation } from 'react-router';

function Results() {
  const { state } = useLocation();
  const data = state.data;
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
    </div>
  );
}

export default Results;
