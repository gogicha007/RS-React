import styles from './card.module.css';
import { IFCharacter } from '../../types/interface';

export const card = (data: IFCharacter) => {
  return (
    <div className={styles.card}>
      <img src={data.image} alt="" />
    </div>
  );
};
