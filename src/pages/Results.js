import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import ResultCard from '../components/search/ResultCard';

import classes from './styles/Results.module.css';
import ResultSidebar from '../components/search/ResultSidebar';

function Results() {
  const params = useParams();
  const endpoint = '/search?query=' + params.searchQuery;

  const { response, isLoading, error } = useFetch(endpoint);

  console.log(response);
  console.log(isLoading);
  console.log(error);

  return (
    <React.Fragment>
      <ResultSidebar />
      <div className={classes.results}>
        {isLoading && <p>Loading</p>}
        {error && <p>error</p>}
        {response && response.map((item) => <ResultCard title={item.title} />)}
      </div>
    </React.Fragment>
  );
}

export default Results;
