import React, { useState, useEffect } from 'react';

function useFetch(endpoint) {
  const url = 'http://127.0.0.1:5000';
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url + endpoint, { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [url]);

  return loading;
}

export default useFetch;
