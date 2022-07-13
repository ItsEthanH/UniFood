import { useState, useEffect } from 'react';

import classes from './styles/DesktopShowcase.module.css';
import recipeImage from '../../../assets/landing/recipe-feature-image.jpg';
import mealPlanImage from '../../../assets/landing/plan-feature-image.jpg';
import pantryImage from '../../../assets/landing/pantry-feature-image.jpg';

function DesktopShowcase() {
  const [tab, setTab] = useState(0);

  // initialise with empty values to prevent selectedContent being undefined
  let selectedContent = {
    header: '',
    paragraph: '',
    image: '',
    imageAlt: '',
  };

  switch (tab) {
    case 0: //recipes
      selectedContent = {
        header: 'Thousands of recipes, at your fingertips.',
        paragraph:
          'Coming up with meal ideas has never been simpler. Using our library of over 5,000 recipes, you can save your favourites, organise them into folders and create meal plans and shopping lists. With full nutritional information for all our recipes, its never been easier to eat well with minimal effort.',
        image: recipeImage,
        imageAlt: 'An appetizing image of a buffet of food',
      };
      break;

    case 1: //meal plan
      selectedContent = {
        header: 'Meal planning. Done right.',
        paragraph:
          "Meal planning is a proven way to eat healthily, waste less and meet your nutritional goals. UniFood gives you all the tools you need to create your own awesome meal plans, fitting any dietary needs. Don't want to make your own? We can do it for you, after a few simple clicks.",
        image: mealPlanImage,
        imageAlt:
          'An image looking down onto a man writing in a book, surrounded by food',
      };
      break;

    case 2: //pantry
      selectedContent = {
        header: 'Waste less keeping track of what you have.',
        paragraph:
          "Ever buy an ingredient, thinking you don't have it, only to slap yourself when you get home and realise you do? We've all been there. Easily add ingredients into your digital pantry and never lose track of what you have! Ingredients are automatically added and deducted through use of the shopping list and meal plan features.",
        image: pantryImage,
        imageAlt:
          'Numerous bowls of colourful food on a table, adjacent to a pepper grinder',
      };
      break;
  }

  return (
    <>
      <div className={classes.tabbar}>
        <ul>
          <li className={tab === 0 ? classes.active : ''}>
            <button
              onClick={() => {
                setTab(0);
              }}
            >
              Recipes
            </button>
          </li>
          <li className={tab === 1 ? classes.active : ''}>
            <button
              onClick={() => {
                setTab(1);
              }}
            >
              Meal Planning
            </button>
          </li>
          <li className={tab === 2 ? classes.active : ''}>
            <button
              onClick={() => {
                setTab(2);
              }}
            >
              Pantry
            </button>
          </li>
        </ul>
      </div>
      <div className={classes.content}>
        <div className={classes.text}>
          <h3>{selectedContent.header}</h3>
          <p>{selectedContent.paragraph}</p>
        </div>
        <div className={classes.image}>
          <img src={selectedContent.image} alt={selectedContent.imageAlt} />
        </div>
      </div>
    </>
  );
}

export default DesktopShowcase;
