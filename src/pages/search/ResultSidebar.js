import React, { useState, useRef } from 'react';

import classes from './styles/ResultSidebar.module.css';

import SectionTitle from '../../components/ui/SectionTitle';
import ResultSidebarCard from './ResultSidebarCard';
import ResultsPlaceholder from './ResultsPlaceholder';

function ResultSidebar(props) {
  const [mealPlanItems, setMealPlanItems] = useState([]);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const mealPlanRef = useRef();
  const shoppingListRef = useRef();

  function checkDraggable(event) {
    if (!event.dataTransfer.getData('text/title')) {
      location.current.style.backgroundColor = 'transparent';
      return;
    }
  }

  function dragEnter(location, event) {
    checkDraggable(event);
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
    checkDraggable(event);
    let name = event.dataTransfer.getData('text/title');
    let src = event.dataTransfer.getData('text/src');
    let id = name.replace(/\s+/g, '') + Math.floor(Math.random() * 10000);

    const item = {
      id: id,
      name: name,
      src: src,
    };

    if (location === mealPlanRef) {
      setMealPlanItems((prevItems) => [...prevItems, item]);
    }

    if (location === shoppingListRef) {
      setShoppingListItems((prevItems) => [...prevItems, item]);
    }

    dragExit(location);
    console.log(id);
  }

  function handleRemove(id, list) {
    const newList = list.filter((item) => item.id !== id);

    if (list === mealPlanItems) {
      setMealPlanItems(newList);
    }

    if (list === shoppingListItems) {
      setShoppingListItems(newList);
    }
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
          return (
            <ResultSidebarCard
              id={item.id}
              key={item.id}
              name={item.name}
              src={item.src}
              onRemove={() => handleRemove(item.id, mealPlanItems)}
            />
          );
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
          return (
            <ResultSidebarCard
              id={item.id}
              key={item.id}
              name={item.name}
              src={item.src}
              onRemove={() => handleRemove(item.id, shoppingListItems)}
            />
          );
        })}

        <ResultsPlaceholder shoppingList={true} />
      </ul>
    </aside>
  );
}

export default ResultSidebar;
