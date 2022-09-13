import SecondarySidebar from '../../components/sidebar/SecondarySidebar';

import classes from './styles/MealPlanSidebar.module.css';

function MealPlanSidebar(props) {
  return (
    <SecondarySidebar styles={`${classes.sidebar} ${props.styles}`}>
      <h3 className={`${classes.today} body-large color-white`}>Today</h3>
      <div className="margin-1r0">
        <p className={classes.heading}>Notes</p>
        <ul className={`${classes.notes} body`}>
          <li className={classes.green}>All ingredients for today are in the pantry!</li>
          <li className={classes.yellow}>There is one dietary conflict today.</li>
          <li className={classes.green}>You have planned three meals for today!</li>
          <li className={classes.red}>You are planned to miss your nutritional goals today.</li>
        </ul>
      </div>
      <div className="margin-1r0">
        <p className={classes.heading}>Nutrition</p>
      </div>
    </SecondarySidebar>
  );
}

export default MealPlanSidebar;
