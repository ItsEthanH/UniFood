import { useState } from 'react';

function useFetch() {
  const url = 'http://127.0.0.1:5000';
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function sendRequest(endpoint, options, fetchType) {
    try {
      const res = await fetch(url + endpoint, options);

      if (!res.ok) {
        throw Error('Something went wrong!');
      }

      const returnedData = await res.json();
      console.log(returnedData);

      switch (fetchType) {
        case 'SEARCH':
          setResponse(returnedData.results);
          break;
        case 'RECIPE':
          setResponse(returnedData.recipeInfo);
          break;
        default:
          setResponse(returnedData.results);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect(() => {
  //   sendRequest();
  // }, [endpoint]);
  return { sendRequest, response, isLoading, error };
}

export default useFetch;
