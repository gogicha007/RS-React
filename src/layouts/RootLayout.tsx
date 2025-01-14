import { Outlet } from 'react-router-dom';
import HomePage from '../pages/Home/home';

const RootLayout = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};

export default RootLayout;
