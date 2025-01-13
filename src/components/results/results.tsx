import styles from './results.module.css';
import { IFCharacter } from '../../types/interface';
import { Card } from '../card/card';
import { NavLink } from 'react-router';

function Results(props: { data: IFCharacter[] }) {
  // const handleClickOnCard = () => {};
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {props.data.map((obj) => {
          return (
            <NavLink to="#" key={obj.id}>
              <Card {...obj} />;
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
