import React from 'react';

import ResultCard from './ResultCard';

import placeholder from '../../assets/search/placeholder-search.jpg';
import classes from './Results.module.css';
import ResultSidebar from './ResultSidebar';

function Results() {
  return (
    <React.Fragment>
      <ResultSidebar />
      <div className={classes.results}>
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
        <ResultCard src={placeholder} title="Velvet Victoria Cake" />
      </div>
    </React.Fragment>
  );
}

export default Results;
