import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const res = await fetch(url);
    const data = res.json();
    const [item] = data;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};
