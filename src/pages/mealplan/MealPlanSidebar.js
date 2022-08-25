import SecondarySidebar from '../../components/sidebar/SecondarySidebar';
import SectionTitle from '../../components/ui/SectionTitle';

import classes from './styles/MealPlanSidebar.module.css';

function MealPlanSidebar(props) {
  return (
    <SecondarySidebar styles={`${classes.sidebar} ${props.styles}`}>
      <SectionTitle white>Today</SectionTitle>
      <div className={classes.section}>
        <p className={classes['section-heading']}>Notes</p>
        <ul className={classes.notes}>
          <li className={classes.green}>All ingredients for today are in the pantry!</li>
          <li className={classes.yellow}>There is one dietary conflict today.</li>
          <li className={classes.omgreen}>You have planned three meals for today!</li>
          <li className={classes.red}>You are planned to miss your nutritional goals today.</li>
        </ul>
      </div>
      <div className={classes.section}>
        <p className={classes['section-heading']}>Nutrition</p>
      </div>
    </SecondarySidebar>
  );
}

export default MealPlanSidebar;
