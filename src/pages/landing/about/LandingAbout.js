import { useState, useEffect } from 'react';

import MobileAccordion from './MobileAccordion';
import DesktopShowcase from './DesktopShowcase';

import recipeImage from '../../../assets/landing/recipe-feature-image.jpg';
import mealPlanImage from '../../../assets/landing/plan-feature-image.jpg';
import pantryImage from '../../../assets/landing/pantry-feature-image.jpg';

function LandingAbout() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const aboutContent = {
    Recipes: {
      title: 'Thousands of recipes, at your fingertips.',
      description:
        'Coming up with meal ideas has never been simpler. Using our library of over 5,000 recipes, you can save your favourites, organise them into folders and create meal plans and shopping lists. With full nutritional information for all our recipes, its never been easier to eat well with minimal effort.',
      image: recipeImage,
    },

    Meal_Planning: {
      title: 'Meal planning. Done right.',
      description:
        "Meal planning is a proven way to eat healthily, waste less and meet your nutritional goals. UniFood gives you all the tools you need to create your own awesome meal plans, fitting any dietary needs. Don't want to make your own? We can do it for you, after a few simple clicks.",
      image: mealPlanImage,
    },

    Pantry: {
      title: 'Waste less keeping track of what you have.',
      description:
        "Ever buy an ingredient, thinking you don't have it, only to slap yourself when you get home and realise you do? We've all been there. Easily add ingredients into your digital pantry and never lose track of what you have! Ingredients are automatically added and deducted through use of the shopping list and meal plan features.",
      image: pantryImage,
    },
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <section className="landing-section" id="about">
      <h3 className="heading centered">
        About <span className="color-primary">us</span>
      </h3>
      <p className="body-large centered margin-2r0">
        UniFood is an all-in-one meal planning and recipe app, designed to take the stress out of
        meals. Powered by the Spoonacular API, UniFood has access to over 5000 recipes and 2600
        ingredients, so you are sure to find a recipe you will love.
      </p>
      {windowWidth >= 1280 ? (
        <DesktopShowcase content={aboutContent} />
      ) : (
        <MobileAccordion content={aboutContent} />
      )}
    </section>
  );
}

export default LandingAbout;
