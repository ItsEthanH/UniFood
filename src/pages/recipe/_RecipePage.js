import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import RecipeInformation from './RecipeInformation';
import RecipeInstructions from './RecipeInstructions';
import RecipeNutrition from './RecipeNutrition';

import classes from './styles/RecipePage.module.css';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function RecipePage() {
  const params = useParams();
  const endpoint = '/recipe?recipeID=' + params.recipeid;
  const { sendRequest, response, isLoading, error } = useFetch();

  useEffect(() => {
    sendRequest(endpoint);
  }, []);

  return (
    <main className={isLoading ? classes.loading : classes.recipe}>
      {isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      {response && (
        <>
          <RecipeInformation
            title={response.title}
            image={response.image}
            timeToCook={response.readyInMinutes}
            servings={response.servings}
            ingredients={response.extendedIngredients}
          />
          <RecipeInstructions instructions={response.analyzedInstructions[0].steps} />
          <RecipeNutrition diets={response.diets} />
        </>
      )}
      {error && <p>{error}</p>}
    </main>
  );
}

export default RecipePage;
