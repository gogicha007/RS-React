import styles from './details.module.css';
import type { Params } from 'react-router-dom';
// import { IFCharacter } from '../../types/interface';
import { getDetails } from '../../utils/fetcher';
import { useLoaderData } from 'react-router';

export const Details = () => {
  const obj = useLoaderData();
  console.log('obj', obj);
  return (
    <>
      <div className={styles.details}>
        <img src={obj.image} alt="image" />
        <p>{obj.origin.name}</p>
        <p>{obj.location.name}</p>
      </div>
      <button>Close details</button>
    </>
  );
};

export const detailsLoader = async ({ params }: { params: Params<'id'> }) => {
  const { id } = params;
  const res = await getDetails(id as string);
  if (!res) {
    throw Error('Could not found job details');
  }
  return res;
};
