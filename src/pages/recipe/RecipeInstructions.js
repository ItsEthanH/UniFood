import RecipeSection from './RecipeSection';

import classes from './styles/RecipeInstructions.module.css';

function RecipeInstructions(props) {
  return (
    <RecipeSection>
      <h3 className="body-large centered margin-1r0">Instructions</h3>
      <hr className={classes.hr} />
      <ol className={`${classes.instructions} body`}>
        {props.instructions.map((instruction, index) => (
          <li key={index} className="margin-2r0">
            {instruction.step}
          </li>
        ))}
      </ol>
    </RecipeSection>
  );
}

export default RecipeInstructions;
