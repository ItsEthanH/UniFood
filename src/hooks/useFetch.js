import { useState, useEffect } from 'react';

function useFetch(endpoint) {
  const URL = 'https://jsonplaceholder.typicode.com';
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function sendRequest() {
    try {
      const res = await fetch(URL + endpoint);

      if (!res.ok) {
        throw Error('Something went wrong!');
      }
      const returnedData = await res.json();
      setResponse(returnedData);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    sendRequest();
  }, []);

  return { response, isLoading, error };
}

export default useFetch;
