import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import ResultCard from './ResultCard';

import placeholder from '../../assets/search/placeholder-search.jpg';
import classes from './Results.module.css';
import ResultSidebar from './ResultSidebar';

function Results() {
  let params = useParams();
  useFetch('/search?query=' + params.searchQuery);

  return (
    <React.Fragment>
      <ResultSidebar />
      <div className={classes.results}>
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
      </div>
    </React.Fragment>
  );
}

export default Results;
