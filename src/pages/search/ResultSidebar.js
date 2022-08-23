import React, { useState } from 'react';

import classes from './styles/ResultSidebar.module.css';

import ResultsSidebarSection from './ResultsSidebarSection';

function ResultSidebar() {
  const [mealPlanItems, setMealPlanItems] = useState([]);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  function sidebarButtonClickHandler(id) {
    console.log('Hello from ResultSidebar.js!');
    console.log(id);
  }

  console.log(mealPlanItems);
  console.log(shoppingListItems);

  return (
    <aside className={classes.sidebar}>
      <ResultsSidebarSection
        title="Meal Plan"
        id="MEAL_PLAN"
        items={mealPlanItems}
        setItems={setMealPlanItems}
        onButtonClick={sidebarButtonClickHandler}
      />
      <ResultsSidebarSection
        title="Shoping List"
        id="SHOPPING_LIST"
        items={shoppingListItems}
        setItems={setShoppingListItems}
        onButtonClick={sidebarButtonClickHandler}
      />
    </aside>
  );
}

export default ResultSidebar;
