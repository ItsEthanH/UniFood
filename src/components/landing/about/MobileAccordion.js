import MobileAccordionTab from './MobileAccordionTab';

function MobileAccordion() {
  return (
    <>
      <MobileAccordionTab
        buttonTitle="Recipes"
        contentTitle="Thousands of recipes, at your fingertips."
        contentBody="Coming up with meal ideas has never been simpler. Using our library of over 5,000 recipes, you can save your favourites, organise them into folders and create meal plans and shopping lists. With full nutritional information for all our recipes, its never been easier to eat well with minimal effort."
      />
      <MobileAccordionTab
        buttonTitle="Meal Planning"
        contentTitle="Meal planning. Done right."
        contentBody="Meal planning is a proven way to eat healthily, waste less and meet your nutritional goals. UniFood gives you all the tools you need to create your own awesome meal plans, fitting any dietary needs."
      />
      <MobileAccordionTab
        buttonTitle="Pantry"
        contentTitle="Waste less by keeping track of what you have."
        contentBody="Ever buy an ingredient, thinking you don't have it, only to slap yourself when you get home and realise you do? We've all been there. Easily add ingredients into your digital pantry and never lose track of what you have!"
      />
    </>
  );
}

export default MobileAccordion;
