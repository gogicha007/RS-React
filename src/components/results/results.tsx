import styles from './results.module.css';
import { IFCharacter } from '../../types/interface';
import { Card } from '../card/card';

function results(props: { data: IFCharacter[] }) {
  return (
    <div className={styles.results}>
      {props.data.map((obj) => {
        return <Card key={obj.id} {...obj} />;
      })}
    </div>
  );
}

export default results;
