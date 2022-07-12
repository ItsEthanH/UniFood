import { useState } from 'react';

function useFetch() {
  const url = 'http://127.0.0.1:5000';
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  async function sendRequest(endpoint, options) {
    setResponse(null);
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch(url + endpoint, options);

      if (!res.ok) {
        throw Error('Something went wrong!');
      }

      const returnedData = await res.json();
      setResponse(returnedData.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { sendRequest, response, isLoading, error };
}

export default useFetch;
