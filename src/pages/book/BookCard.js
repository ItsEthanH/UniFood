import { useState } from 'react';

import IconWithTooltip from '../../components/ui/IconWithTooltip';

import classes from './styles/BookCard.module.css';
import placeholder from '../../assets/placeholders/placeholder-recommendation.jpg';
import viewIcon from '../../assets/icons/view.png';
import planIcon from '../../assets/icons/plan.png';
import cartIcon from '../../assets/icons/cart.png';
import editIcon from '../../assets/icons/edit.png';
import variationsIcon from '../../assets/icons/variations.png';

function BookCard(props) {
  const [tooltip, setTooltip] = useState('');

  function showTooltip(event) {
    setTooltip(event.target.closest('button').dataset.tooltip);
  }

  function hideTooltip() {
    setTooltip('');
  }

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={placeholder} alt="" />
      </div>
      <div className={classes.text}>
        <div className={classes.title}>
          <h4 className="body-large">Title</h4>
          <p className="body-small">Recommended as: Dinner</p>
        </div>

        <div className={`${classes.nutrition} body`}>
          <p>??? calories</p>
          <div className={classes.macros}>
            <p>??? carbs</p>
            <div className={classes.divider} />
            <p>??? fat</p>
            <div className={classes.divider} />
            <p>??? protein</p>
          </div>
        </div>
        <hr className="app-rule" />
        <div className={classes.actions}>
          <IconWithTooltip icon={viewIcon} tooltipText="View Recipe" />
          <IconWithTooltip icon={editIcon} tooltipText="Edit Recipe" />
          <IconWithTooltip icon={planIcon} tooltipText="Add to Meal Plan" />
          <IconWithTooltip icon={cartIcon} tooltipText="Add to Shopping Cart" />
          <IconWithTooltip icon={variationsIcon} tooltipText="Browse Variations" />
        </div>
      </div>
    </div>
  );
}

export default BookCard;
