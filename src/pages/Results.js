import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

import ResultCard from '../components/search/ResultCard';
import ResultSidebar from '../components/search/ResultSidebar';

import classes from './styles/Results.module.css';
import { useEffect } from 'react';

function Results() {
  const params = useParams();
  const endpoint = '/search?query=' + params.searchQuery;
  const { response, isLoading, error } = useFetch(endpoint);

  console.log('rendered');
  console.log(endpoint);

  return (
    <React.Fragment>
      <ResultSidebar />
      <div className={classes.results}>
        {isLoading && <p>Loading</p>}
        {error && <p>error</p>}
        {response &&
          response.map((item) => (
            <ResultCard title={item.title} src={item.image} />
          ))}
      </div>
    </React.Fragment>
  );
}

export default Results;
