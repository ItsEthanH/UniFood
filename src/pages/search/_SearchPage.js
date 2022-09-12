import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import ResultCard from './ResultCard';
import ResultSidebar from './ResultSidebar';

import classes from './styles/SearchPage.module.css';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function _SearchPage() {
  const params = useParams();
  const endpoint = '/search?query=' + params.searchQuery;
  const { sendRequest, response, isLoading, error } = useFetch();

  console.log(response);

  useEffect(() => {
    sendRequest(endpoint);
  }, [endpoint]);

  return (
    <main className={classes.results}>
      <ResultSidebar />
      <ul className={classes.list}>
        {isLoading && <LoadingSpinner />}
        {error && <p>{error}</p>}
        {response &&
          response.map((item) => (
            <ResultCard key={item.id} title={item.title} src={item.image} id={item.id} />
          ))}
      </ul>
    </main>
  );
}

export default _SearchPage;
