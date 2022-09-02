import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function useFetch() {
  const url = 'http://127.0.0.1:3000';
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const authCtx = useContext(AuthContext);

  async function sendRequest(endpoint, options = {}) {
    setResponse(null);
    setError(null);
    setIsLoading(true);

    if (!options.headers) options.headers = {};
    options.headers.Authorization = 'Bearer ' + authCtx.token;

    const res = await fetch(url + endpoint, options);

    if (!res.ok) {
      setIsLoading(false);
      setResponse(null);
      setError(response);

      console.group('Fetch Error');
      console.log(response);
      console.groupEnd();
      return;
    }

    const data = await res.json();

    setResponse(data.results);
    setIsLoading(false);
    setError(null);
  }

  return { sendRequest, response, isLoading, error };
}

export default useFetch;
