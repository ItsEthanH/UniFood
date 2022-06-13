import { useState, useEffect } from 'react';

function useFetch(endpoint) {
  const URL = 'http://127.0.0.1:5000';
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function sendRequest() {
    try {
      const res = await fetch(URL + endpoint, { mode: 'cors' });

      if (!res.ok) {
        throw Error('Something went wrong!');
      }

      const returnedData = await res.json();

      setResponse(returnedData.results);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    sendRequest();
  }, [endpoint]);

  return { response, isLoading, error };
}

export default useFetch;
