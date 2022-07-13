import { useState } from 'react';

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetch = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetch, isLoading, error];
};
