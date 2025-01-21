import styles from './root-layout.module.css';
import HomePage from '../pages/Home/home';

const RootLayout = () => {
  return (
    <div className={styles.root}>
      <HomePage />
    </div>
  );
};

export default RootLayout;
