const featureTabButtons = document.getElementsByClassName(
  'feature-tab__button'
);

const desktopFeatureButtons = document.getElementsByClassName(
  'desktop-features__tab'
);

const desktopFeatureContent = document.querySelector(
  '.desktop-features__content'
);

const featureData = [
  {
    id: 'recipe-tab',
    title: 'Thousands of recipes, at your fingertips.',
    image: 'assets/images/meal-feature-image.jpg',
    imageAlt: 'An appetizing image of fries and salsa',
    text: 'Coming up with meal ideas has never been simpler. Using our library of over 5,000 recipes, you can save your favourites, organise them into folders and create meal plans and shopping lists. With full nutritional information for all our recipes, its never been easier to eat well with minimal effort.',
  },
  {
    id: 'meal-tab',
    title: 'Meal planning. Done right.',
    image: 'assets/images/prep-feature-image.jpg',
    imageAlt: 'An image of something',
    text: "Meal planning is a proven way to eat healthily, waste less and meet your nutritional goals. UniFood gives you all the tools you need to create your own awesome meal plans, fitting any dietary needs. Don't want to make your own? We can do it for you, after a few simple clicks.",
  },
  {
    id: 'pantry-tab',
    title: 'Waste less keeping track of what you have.',
    image: 'assets/images/pantry-feature-image.jpg',
    imageAlt: 'An image of something',
    text: "Ever buy an ingredient, thinking you don't have it, only to slap yourself when you get home and realise you do? We've all been there. Easily add ingredients into your digital pantry and never lose track of what you have! Ingredients are automatically added and deducted through use of the shopping list and meal plan features.",
  },
];

for (const btn of featureTabButtons) {
  btn.addEventListener('click', function () {
    btn.nextElementSibling.classList.toggle('feature-tab__content--active');
    btn.classList.toggle('feature-tab__button--active');

    if (btn.classList.contains('feature-tab__button--active')) {
      btn.querySelector('p').textContent = '-';
    } else {
      btn.querySelector('p').textContent = '+';
    }
  });
}

for (const btn of desktopFeatureButtons) {
  btn.addEventListener('click', () => {
    let chosenFeature = '';

    if (!btn.classList.contains('desktop-features__tab--active')) {
      for (const btn of desktopFeatureButtons) {
        btn.classList.remove('desktop-features__tab--active');
      }

      for (const feature of featureData) {
        if (feature.id === btn.id) {
          chosenFeature = feature;
        }
      }

      btn.classList.add('desktop-features__tab--active');

      // The innerHTML value here is exactly what is needed, but the image src url appears to get URL encoded when passed to the server, meaning it then can't find resource.
      // This is a nice example of security being a pain in the ass... there is probably a way for us to override this, maybe: https://developer.mozilla.org/en-US/docs/Web/API/TrustedScriptURL
      desktopFeatureContent.innerHTML = decodeURIComponent(`
      <div class="desktop-features__body">
        <h3>${chosenFeature.title}</h3>
        <br>
        <p>${chosenFeature.text}</p>
      </div>
      <div class="desktop-features__image">
        <img src="${chosenFeature.image}" alt="${chosenFeature.imageAlt}">

      </div>`);
    }
  });
}
