import { useState } from 'react';

import placeholder from '../../assets/placeholders/placeholder-recommendation.jpg';

import classes from './styles/MealPlanDayCard.module.css';

function MealPlanDayCard(props) {
  const [hover, setHover] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);

  function buttonClickHandler() {
    return null;
  }

  function cardHoverHandler() {
    setHover(true);
  }

  function cardUnhoverHandler() {
    setHover(false);
    setStepNumber(0);
  }

  function changeInstruction(direction) {
    if (direction === 'NEXT' && stepNumber !== DUMMY_INSTRUCTIONS.length - 1) {
      setStepNumber((prevStep) => prevStep + 1);
    }
    if (direction === 'PREV' && stepNumber !== 0) {
      setStepNumber((prevStep) => prevStep - 1);
    }
  }

  const DUMMY_INSTRUCTIONS = [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, adipisci! Ipsa amet qui labore accusantium.',
    'Nam earum incidunt id laboriosam deserunt, iste, eaque fugit minima corrupti, consequatur consectetur laborum excepturi?',
    'Earum, quis quisquam beatae cumque est cum explicabo vitae quos quo omnis eaque possimus repudiandae?',
    'Velit commodi dolorum enim magni porro maxime vitae sequi, ex cum debitis quas voluptatem repudiandae.',
    'Ad quae vitae cupiditate, totam ipsa dolorum, ex id tenetur dolor amet doloribus quam obcaecati?',
  ];

  return (
    <div className={classes.card} onMouseEnter={cardHoverHandler} onMouseLeave={cardUnhoverHandler}>
      <div className={classes.image}>
        <img src={placeholder} alt="PLACEHOLDER" />
      </div>

      <div className={classes.title}>
        <h3>{props.meal}</h3>
        <h4>{props.title}</h4>
      </div>

      <div className={classes.divider} />

      <div className={classes.nutrition}>
        <p>{props.calories} calories</p>
        <div className={classes.macros}>
          <p>{props.carbs}g carbs</p>
          <p>{props.fat}g fat</p>
          <p>{props.protein}g protein</p>
        </div>
      </div>

      <div className={classes.divider} />

      <div className={classes.actions}>
        <div className={classes.info}>
          <p>Servings:</p>
          <p>{props.servings}</p>
        </div>
        <div className={classes.info}>
          <p>Time:</p>
          <p>{props.time}</p>
        </div>
        <div className={classes.view}></div>
        <button onClick={buttonClickHandler}>View Full Recipe</button>
        {!hover && <p>Hover over the card to view instructions</p>}
      </div>
      {hover && (
        <div className={classes.instructions}>
          <p>{DUMMY_INSTRUCTIONS[stepNumber]}</p>
          <div className={classes.buttons}>
            <button onClick={changeInstruction.bind(null, 'PREV')}>Prev</button>
            <button onClick={changeInstruction.bind(null, 'NEXT')}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MealPlanDayCard;
