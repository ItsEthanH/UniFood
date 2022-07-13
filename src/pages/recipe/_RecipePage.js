import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import RecipeSection from './RecipeSection';
import SectionTitle from '../../components/ui/SectionTitle';
import RecipeIcon from './RecipeIcon';
import RecipeInfoSubsection from './RecipeInfoSubsection';

import classes from './styles/Recipe.module.css';
import viewIcon from '../../assets/icons/view.png';
import favouriteIcon from '../../assets/icons/favourite.png';
import planIcon from '../../assets/icons/plan.png';
import cartIcon from '../../assets/icons/cart.png';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

import placeholder2 from '../../assets/placeholders/placeholder-recommendation.jpg';

function RecipePage(props) {
  const [nutritionShow, setNutritionShow] = useState(false);
  const [dietShow, setDietShow] = useState(false);
  const [recommendedShow, setRecommendedShow] = useState(false);

  const params = useParams();
  const endpoint = '/recipe?recipeID=' + params.recipeId;
  const { sendRequest, response, isLoading, error } = useFetch();

  useEffect(() => {
    sendRequest(endpoint, {});
  }, []);

  function handleSubsectionClick(subsectionToShow) {
    setDietShow(false);
    setNutritionShow(false);
    setRecommendedShow(false);

    switch (subsectionToShow) {
      case 'Nutritional Information':
        setNutritionShow(true);
        break;
      case 'Dietary Information':
        setDietShow(true);
        break;
      case 'Recommended Recipes':
        setRecommendedShow(true);
        break;
    }
  }

  return (
    <main className={isLoading ? classes.loading : classes.recipe}>
      {isLoading && (
        <div className={classes.loading}>
          <LoadingSpinner />
        </div>
      )}
      {response && (
        <>
          <RecipeSection>
            <img className={classes.image} src={response.image} alt="" />
            <SectionTitle center={true}>{response.title}</SectionTitle>
            <div className={classes.stats}>
              <p>
                {response.readyInMinutes}
                <span> mins</span>
              </p>
              <div className={classes.divider}></div>
              <p>
                ???<span> cal</span>
              </p>
              <div className={classes.divider}></div>
              <p>
                ??<span> /100</span>
              </p>
              <div className={classes.divider}></div>
              <p>
                {response.servings}
                <span> serves</span>
              </p>
            </div>
            <hr />
            <div className={classes.actions}>
              <RecipeIcon icon={viewIcon}></RecipeIcon>
              <RecipeIcon icon={favouriteIcon}></RecipeIcon>
              <RecipeIcon icon={planIcon}></RecipeIcon>
              <RecipeIcon icon={cartIcon}></RecipeIcon>
            </div>
            <hr />
            <div className={classes.ingredients}>
              <ul>
                {response.extendedIngredients.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
          </RecipeSection>
          <RecipeSection>
            <SectionTitle center={true}>Instructions</SectionTitle>
            <hr />
            <ol className={classes.instructions}>
              {response.analyzedInstructions[0].steps.map((instruction) => (
                <li>{instruction.step}</li>
              ))}
            </ol>
          </RecipeSection>
          <RecipeSection info={true}>
            <RecipeInfoSubsection
              title={'Nutritional Information'}
              show={nutritionShow}
              onClick={handleSubsectionClick}
            >
              test
            </RecipeInfoSubsection>
            <RecipeInfoSubsection
              title={'Dietary Information'}
              show={dietShow}
              onClick={handleSubsectionClick}
            >
              test again
            </RecipeInfoSubsection>

            <RecipeInfoSubsection
              title={'Recommended Recipes'}
              show={recommendedShow}
              onClick={handleSubsectionClick}
            >
              <div className={classes.recommendation}>
                <img src={placeholder2} alt="" />
                <h4>Sample Recommendation</h4>
              </div>
              <div className={classes.recommendation}>
                <img src={placeholder2} alt="" />
                <h4>Sample Recommendation</h4>
              </div>
            </RecipeInfoSubsection>
          </RecipeSection>
        </>
      )}
    </main>
  );
}

export default RecipePage;
