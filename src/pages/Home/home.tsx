import { useState } from 'react';
import { IFResponse } from '../../types/interface';
import SearchBar from '../../components/search/search-bar';
import ErrorButton from '../../components/errorButton/errorButton';
import Loader from '../../components/loader/loader';
import styles from './home.module.css';
import { useNavigate } from 'react-router';

function HomePage() {
  const [loading, setLoader] = useState(false);

  const navigate = useNavigate();
  const handleDataChange = (res: IFResponse) => {
    setTimeout(() => {
      if (res) {
        setLoader(false);
        navigate('/results', {
          state: { data: res.results, pagination: res.info },
        });
      }
    }, 1000);
  };

  return (
    <>
      <div className={styles.home__top}>
        <SearchBar onDataChange={handleDataChange} showLoader={setLoader} />
        <ErrorButton />
      </div>
      {loading && <Loader />}
    </>
  );
}

export default HomePage;
