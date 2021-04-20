import { useState, useEffect, useCallback } from 'react';

const useAsync = <T>(action: () => Promise<T>, dependencies: any[]) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | undefined>(undefined);
  const [result, setResult] = useState<T | undefined>(undefined);

  const invoke = useCallback(() => {
    setLoading(true);
    action()
      .then((newResult) => {
        setResult(newResult);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  useEffect(invoke, [invoke]);

  return {
    result,
    error,
    loading,
    rerun: invoke,
  };
};

export default useAsync;
