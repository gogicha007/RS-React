import { IFResponse } from '../types/interface';

const getList = async (
  page: number,
  str: string
): Promise<IFResponse | null> => {
  if (!str) return null;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&status=${str}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return null;
};

const getDetails = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw Error('Could not found charachter details');
  }
};

export { getList, getDetails };
