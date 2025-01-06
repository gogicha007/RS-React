import { IFResponse } from '../types/interface';

export const getList = async (
  str: string,
  page = 1
): Promise<IFResponse | null> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&status=${str}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return null;
};
