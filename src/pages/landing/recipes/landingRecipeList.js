import breakfastOne from '../../../assets/landing/breakfast-1.jpg';
import breakfastTwo from '../../../assets/landing/breakfast-2.jpg';
import breakfastThree from '../../../assets/landing/breakfast-3.jpg';
import lunchOne from '../../../assets/landing/lunch-1.jpg';
import lunchTwo from '../../../assets/landing/lunch-2.jpg';
import lunchThree from '../../../assets/landing/lunch-3.jpg';
import dinnerOne from '../../../assets/landing/dinner-1.jpg';
import dinnerTwo from '../../../assets/landing/dinner-2.jpg';
import dinnerThree from '../../../assets/landing/dinner-3.jpg';
import desertOne from '../../../assets/landing/desert-1.jpg';
import desertTwo from '../../../assets/landing/desert-2.jpg';
import desertThree from '../../../assets/landing/desert-3.jpg';

const recipes = {
  breakfast: [
    {
      title: 'Berry Banana Breakfast Smoothie',
      img: breakfastOne,
      description:
        'If you have 5 minutes to spend in the kitchen, a Berry Banana Breakfast Smoothie might be a tremendous breakfast to try.',
      cost: 2.04,
      time: '5 mins',
    },
    {
      title: 'Homemade Muesli Breakfast Cereal',
      img: breakfastTwo,
      description:
        'Homemade Muesli Breakfast Cereal might be just the morn meal you are searching for.',
      cost: 0.88,
      time: '1 hour 30 mins',
    },
    {
      title: 'Mini Quinoa Egg Breakfast Casserole',
      img: breakfastThree,
      description:
        "Mini Quinoan Egg Breakfast Casserole might be a good recipe to expand your hor d'oeuvre collection.",
      cost: 1.46,
      time: '30 mins',
    },
  ],

  lunch: [
    {
      title: 'Turkey Ranch BLT',
      img: lunchOne,
      description: 'Turkey, bacon, lettice and tomato in pita breads, dressed in ranch sauce.',
      cost: 1.54,
      time: '10 mins',
    },
    {
      title: 'Thai Pasta Salad',
      img: lunchTwo,
      description:
        'Satisfy your Asian craving, with a taste of Thailand. Works well on its own or as part of a larger meal.',
      cost: 3.25,
      time: '45 mins',
    },
    {
      title: 'Orzo Salad With Vegetables and Herbs',
      img: lunchThree,
      description:
        'Orzo rice with a selection of fresh vegetables and seasonings. Perfect for a lighter lunch.',
      cost: 1.46,
      time: '45 mins',
    },
  ],

  dinner: [
    {
      title: 'BLT Pizza',
      img: dinnerOne,
      description:
        'Colby jack cheese, pizza crust, turkey bacon, and a handful of other ingredients are all it takes to make this recipe so scrumptious.',
      cost: 2.78,
      time: '45 mins',
    },
    {
      title: 'Mixed Paella',
      img: dinnerTwo,
      description:
        'A mixture of lemon zest, saffron threads, garlic, and a handful of other ingredients.',
      cost: 2.02,
      time: '45 mins',
    },
    {
      title: 'Ozoni',
      img: dinnerThree,
      description: "A good option if you're following a gluten free and dairy free diet.",
      cost: 3.05,
      time: '45 mins',
    },
  ],

  desert: [
    {
      title: 'German Rhubarb Cake with Meringue',
      img: desertOne,
      description:
        'A cake filled with rhubarb sandwiched between crisp bits of meringue - two excellent puddings in one!',
      cost: 0.61,
      time: '45 mins',
    },
    {
      title: 'Coconut Cassava Pancakes',
      img: desertTwo,
      description:
        'Coconut flavoured pancakes dressed with honey and served with the freshest fruit.',
      cost: 2.53,
      time: '45 mins',
    },
    {
      title: 'Strawberry Shortcake Cobbler',
      img: desertThree,
      description:
        'The best parts of shortcake and cobbler fused in to one, delectable, strawberry-flavoured desert!',
      cost: 2.52,
      time: '45 mins',
    },
  ],
};

export default recipes;
