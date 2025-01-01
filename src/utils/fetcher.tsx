import { IFCharacter } from '../types/interface';

export const getList = async (str: string): Promise<IFCharacter[]> => {
  const response = await fetch(`https://bobsburgers-api.herokuapp.com/characters?hair=${str}`);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return [];
};
