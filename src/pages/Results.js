import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import ResultCard from '../components/search/ResultCard';
import ResultSidebar from '../components/search/ResultSidebar';

import classes from './styles/Results.module.css';
import LoadingSpinner from '../components/ui/LoadingSpinner';

function Results() {
  const params = useParams();
  const endpoint = '/search?query=' + params.searchQuery;
  const { sendRequest, response, isLoading, error } = useFetch();

  useEffect(() => {
    sendRequest(endpoint, {}, 'SEARCH');
  }, [endpoint]);

  return (
    <main className={classes.results}>
      <ResultSidebar />
      <ul className={classes.list}>
        {isLoading && <LoadingSpinner />}
        {error && <p>{error.message}</p>}
        {response &&
          response.map((item) => (
            <ResultCard title={item.title} src={item.image} id={item.id} />
          ))}
      </ul>
    </main>
  );
}

export default Results;
