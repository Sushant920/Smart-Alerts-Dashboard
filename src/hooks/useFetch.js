import { useState, useEffect } from "react";

export function useFetch(apiFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await apiFunction();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [apiFunction]);

  return { data, loading };
}
