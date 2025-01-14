import { Outlet } from 'react-router';

const ResultsLayout = () => {
  return (
    <div>
      <h2>Results</h2>
      <Outlet />
    </div>
  );
};

export default ResultsLayout;
