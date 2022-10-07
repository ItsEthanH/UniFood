import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import SecondarySidebar from '../../components/sidebar/SecondarySidebar';
import ResultsSidebarSection from './ResultsSidebarSection';

function ResultSidebar() {
  const [mealPlanItems, setMealPlanItems] = useState([]);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const { sendRequest, response, isLoading, error } = useFetch();

  console.log(mealPlanItems);

  function sidebarSubmitHandler(id) {
    if (id === 'SHOPPING') return;

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(mealPlanItems),
    };

    sendRequest('/mealplanner', requestOptions);
  }

  function updateMealItems(sectionId, recipeid, type, dateObj, quantity) {
    if (sectionId === 'MEAL') {
      const foundMealPlanItem = mealPlanItems.find((item) => item.uniqueid === recipeid);
      foundMealPlanItem.type = type;
      foundMealPlanItem.date = dateObj.getTime();
      foundMealPlanItem.quantity = quantity;
    }

    if (sectionId === 'SHOPPING') {
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
        sectionId="MEAL"
        items={mealPlanItems}
        setItems={setMealPlanItems}
        onSidebarSubmit={sidebarSubmitHandler}
        onMealCatagorise={updateMealItems}
      />
      <ResultsSidebarSection
        title="Shopping List"
        sectionId="SHOPPING"
        items={shoppingListItems}
        setItems={setShoppingListItems}
        onSidebarSubmit={sidebarSubmitHandler}
        onMealCatagorise={updateMealItems}
      />
    </SecondarySidebar>
  );
}

export default ResultSidebar;
