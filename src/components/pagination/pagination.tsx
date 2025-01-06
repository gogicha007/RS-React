import styles from './pagination.module.css';

export const Pagination = () => {
  return (
    <>
      <nav className={styles.pgn}>
        <button className={styles.pgn__button} disabled={false}>
          &laquo;
        </button>
        <button className={styles.pgn__button} disabled={false}>
          &raquo;
        </button>
      </nav>
    </>
  );
};
