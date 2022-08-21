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
      // start comment

      if (!options.headers) {
        options.headers = {};
      }
      // options.headers.Authentication = 'Bearer Token';
      options.headers.Authorization = "Bearer " + localStorage.getItem('token');

      //end comment

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

  function clearStates() {
    setResponse(null);
    setError(null);
    setError(null);
  }

  return { sendRequest, clearStates, response, isLoading, error };
}

export default useFetch;
