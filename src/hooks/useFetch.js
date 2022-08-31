import { useEffect } from 'react';
import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function useFetch() {
  const url = 'http://127.0.0.1:3000';
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const authCtx = useContext(AuthContext);

  async function sendRequest(endpoint, options) {
    setResponse(null);
    setError(null);
    setIsLoading(true);

    try {
      if (!options.headers) options.headers = {};
      options.headers.Authorization = 'Bearer ' + authCtx.token;

      const res = await fetch(url + endpoint, options);

      if (!res.ok) {
        throw Error('Something went wrong!');
      }

      const returnedData = await res.json();
      console.log(returnedData);
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
