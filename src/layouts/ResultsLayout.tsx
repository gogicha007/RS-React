import { Outlet } from 'react-router';
import Results from '../components/results/results';

const ResultsLayout = () => {
  return (
    <div>
      <Results />
      <Outlet />
    </div>
  );
};

export default ResultsLayout;
