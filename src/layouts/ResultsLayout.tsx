import type { Params } from 'react-router';
import styles from './results-layout.module.css';
import { Outlet } from 'react-router';
import Results from '../components/results/results';

const ResultsLayout = () => {
  return (
    <div className={styles.results}>
      <div className={styles.results__list}>
        <Results />
      </div>
      <div className={styles.results__details}>
        <Outlet />
      </div>
    </div>
  );
};

export default ResultsLayout;

export async function resultsLoader({ params }: { params: Params }) {
  console.log(params);
}
