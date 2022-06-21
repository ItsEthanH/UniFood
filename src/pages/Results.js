import React from 'react';

import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import ResultCard from '../components/search/ResultCard';
import ResultSidebar from '../components/search/ResultSidebar';

import classes from './styles/Results.module.css';
import '../assets/styles/global-app.css';

function Results() {
  const params = useParams();
  const endpoint = '/search?query=' + params.searchQuery;
  const { response, isLoading, error } = useFetch(endpoint, 'SEARCH');

  console.log(response);

  return (
    <main className={classes.results}>
      <ResultSidebar />
      <ul className={classes.list}>
        {isLoading && <p>Loading</p>}
        {error && <p>error</p>}
        {response &&
          response.map((item) => (
            <ResultCard title={item.title} src={item.image} id={item.id} />
          ))}
      </ul>
    </main>
  );
}

export default Results;
