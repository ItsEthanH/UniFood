import React from 'react';

import classes from './ResultSidebar.module.css';

import SectionTitle from '../ui/SectionTitle';
import ResultSidebarCard from './ResultSidebarCard';
import ResultsPlaceholder from './ResultsPlaceholder';

function ResultSidebar(props) {
  return (
    <aside className={classes.sidebar}>
      <div>
        <SectionTitle white={true}>Meal Plan</SectionTitle>
        <ResultSidebarCard />
        <ResultSidebarCard />
        <ResultsPlaceholder />
      </div>
      <div>
        <SectionTitle white={true}>Shopping List</SectionTitle>
        <ResultSidebarCard />
        <ResultSidebarCard />
        <ResultsPlaceholder shoppingList={true} />
      </div>
    </aside>
  );
}

export default ResultSidebar;
