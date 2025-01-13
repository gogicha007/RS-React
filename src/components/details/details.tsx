import styles from './details.module.css';
import { IFCharacter } from '../../types/interface';

export const Details = (obj: IFCharacter) => {
  return (
    <>
      <div className={styles.details}>
        <img src={obj.image} alt="image" />
        <p>{obj.origin.name}</p>
        <p>{obj.location.name}</p>
      </div>
      <button>Close details</button>
    </>
  );
};
