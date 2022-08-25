import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import SecondarySidebar from '../../components/sidebar/SecondarySidebar';
import ResultsSidebarSection from './ResultsSidebarSection';

function ResultSidebar() {
  const [mealPlanItems, setMealPlanItems] = useState([]);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const { sendRequest, response, isLoading, error } = useFetch();

  function sidebarSubmitHandler(id) {
    if (id === 'SHOPPING_LIST') return;

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(mealPlanItems),
    };

    sendRequest('/mealplanner', requestOptions);
  }

  function updateMealItems(sectionId, recipeid, type, dateObj, quantity) {
    if (sectionId === 'MEAL_PLAN') {
      const foundMealPlanItem = mealPlanItems.find((item) => item.id === recipeid);
      if (type) foundMealPlanItem.type = type;
      if (dateObj) foundMealPlanItem.date = dateObj.getTime();
      if (quantity) foundMealPlanItem.quantity = quantity;
    }

    if (sectionId === 'SHOPPING_LIST') {
      return;

      //for when shopping list backend is completed

      // const foundShoppingItem = shoppingListItems.find((item) => item.id === recipeid);
      // if (type) foundShoppingItem.type = type;
      // if (dateObj) foundShoppingItem.date = dateObj.getTime();
      // if (quantity) foundShoppingItem.quantity = quantity;
    }
  }

  return (
    <SecondarySidebar>
      <ResultsSidebarSection
        title="Meal Plan"
        sectionId="MEAL_PLAN"
        items={mealPlanItems}
        setItems={setMealPlanItems}
        onSidebarSubmit={sidebarSubmitHandler}
        onMealCatagorise={updateMealItems}
      />
      <ResultsSidebarSection
        title="Shoping List"
        sectionId="SHOPPING_LIST"
        items={shoppingListItems}
        setItems={setShoppingListItems}
        onSidebarSubmit={sidebarSubmitHandler}
        onMealCatagorise={updateMealItems}
      />
    </SecondarySidebar>
  );
}

export default ResultSidebar;
