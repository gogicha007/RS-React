import styles from './pagination.module.css';
import { IFRespInfo } from '../../types/interface';
// import { useState } from 'react';

interface Props {
  resInfo: IFRespInfo;
}

export const Pagination = (props: Props) => {
  // const [loading, setLoader] = useState(false)

  const clickPagination = async (direction: 'prev' | 'next') => {
    console.log(props.resInfo[direction]);
    // setLoader(true);
    const response = await fetch(props.resInfo[direction] as string);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      // props.onPageChange(data);
    }
    // setLoader(false);
  };

  return (
    <>
      <nav className={styles.pgn}>
        <button
          onClick={() => clickPagination('prev')}
          className={styles.pgn__button}
          disabled={!props.resInfo.prev}
        >
          &laquo;
        </button>
        <button
          onClick={() => clickPagination('next')}
          className={styles.pgn__button}
          disabled={!props.resInfo.next}
        >
          &raquo;
        </button>
      </nav>
    </>
  );
};
