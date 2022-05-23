import React, { useState, useRef } from 'react';

import classes from './ResultSidebar.module.css';

import SectionTitle from '../ui/SectionTitle';
import ResultSidebarCard from './ResultSidebarCard';
import ResultsPlaceholder from './ResultsPlaceholder';

function ResultSidebar(props) {
  const [mealPlanItems, setMealPlanItems] = useState([]);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const mealPlanRef = useRef();
  const shoppingListRef = useRef();

  function dragEnter(location) {
    location.current.style.backgroundColor = '#0fa50f38';
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function dragExit(location) {
    location.current.style.backgroundColor = 'transparent';
  }

  function drop(location, event) {
    event.preventDefault();
    const item = {
      name: event.dataTransfer.getData('text/title'),
      src: event.dataTransfer.getData('text/src'),
    };

    if (location === mealPlanRef) {
      setMealPlanItems((prevItems) => [...prevItems, item]);
    }

    if (location === shoppingListRef) {
      setShoppingListItems((prevItems) => [...prevItems, item]);
    }

    dragExit(location);
  }

  return (
    <aside className={classes.sidebar}>
      <SectionTitle white={true}>Meal Plan</SectionTitle>
      <ul
        ref={mealPlanRef}
        onDragEnter={dragEnter.bind(null, mealPlanRef)}
        onDragOver={dragOver}
        onDragExit={dragExit.bind(null, mealPlanRef)}
        onDrop={drop.bind(null, mealPlanRef)}
      >
        {mealPlanItems.map((item) => {
          return <ResultSidebarCard name={item.name} src={item.src} />;
        })}

        <ResultsPlaceholder />
      </ul>
      <SectionTitle white={true}>Shopping List</SectionTitle>
      <ul
        ref={shoppingListRef}
        onDragEnter={dragEnter.bind(null, shoppingListRef)}
        onDragOver={dragOver}
        onDragExit={dragExit.bind(null, shoppingListRef)}
        onDrop={drop.bind(null, shoppingListRef)}
      >
        {shoppingListItems.map((item) => {
          return <ResultSidebarCard name={item.name} src={item.src} />;
        })}

        <ResultsPlaceholder shoppingList={true} />
      </ul>
    </aside>
  );
}

export default ResultSidebar;
