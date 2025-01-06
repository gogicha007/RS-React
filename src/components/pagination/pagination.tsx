import { IFRespInfo, IFResponse } from '../../types/interface';
import styles from './pagination.module.css';

interface Props {
  onPageChange: (data: IFResponse) => void;
  resInfo: IFRespInfo;
  showLoader: (value: boolean) => void;
}

export const Pagination = (props: Props) => {
  const clickPagination = async (direction: 'prev' | 'next') => {
    console.log(props.resInfo[direction]);
    props.showLoader(true);
    const response = await fetch(props.resInfo[direction] as string);
    if (response.status === 200) {
      const data = await response.json();
      props.onPageChange(data);
    }
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
