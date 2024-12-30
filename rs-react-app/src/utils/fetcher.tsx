import { IFData } from '../types/interface';

export const getList = async (str: string): Promise<IFData[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/${str}`);
  if (response.status === 200) {
    const data = await response.json();
    return data.results;
  }
  return [];
};
