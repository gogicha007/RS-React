import { useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { CharacterFilters } from '../types/interface';

export function useCharacterFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get('status') as string;

  const setFilters = useCallback((filters: CharacterFilters) => {
    setSearchParams((params) => {
      if (filters.status !== undefined) {
        params.set('status', filters.status);
      }
      return params;
    });
  }, []);

  return {
    status,
    setFilters,
  };
}
