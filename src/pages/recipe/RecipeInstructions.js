import SectionTitle from '../../components/ui/SectionTitle';
import RecipeSection from './RecipeSection';

import classes from './styles/RecipeInstructions.module.css';

function RecipeInstructions(props) {
  return (
    <RecipeSection>
      <SectionTitle center={true}>Instructions</SectionTitle>
      <hr />
      <ol className={classes.instructions}>
        {props.instructions.map((instruction) => (
          <li>{instruction.step}</li>
        ))}
      </ol>
    </RecipeSection>
  );
}

export default RecipeInstructions;
