import styles from './root-layout.module.css';

import { Outlet } from 'react-router-dom';
import HomePage from '../pages/Home/home';

const RootLayout = () => {
  return (
    <div className={styles.root}>
      <HomePage />
      <Outlet />
    </div>
  );
};

export default RootLayout;
