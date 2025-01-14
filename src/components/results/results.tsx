import styles from './results.module.css';
import { IFCharacter } from '../../types/interface';
import { Card } from '../card/card';
import { Link } from 'react-router';

function Results(props: { data: IFCharacter[] }) {
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {props.data.map((obj) => {
          return (
            <Link to={obj.id.toString()} key={obj.id}>
              <Card {...obj} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
