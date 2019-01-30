import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMyData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  };

  useEffect(() => {
    fetchMyData();
  }, []);

  return { data, loading };
};
