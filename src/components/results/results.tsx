import styles from './results.module.css';
import { IFCharacter } from '../../types/interface';
import { Card } from '../card/card';

function results(props: { data: IFCharacter[] }) {
  // const handleClickOnCard = () => {};
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        {props.data.map((obj) => {
          return <Card key={obj.id} {...obj} />;
        })}
      </div>
      <div className={styles.results__details}>Details</div>
    </div>
  );
}

export default results;
