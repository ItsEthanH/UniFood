import React, { useState } from 'react';

import classes from './styles/MobileAccordionTab.module.css';

function MobileAccordionTab(props) {
  const [isTabExpanded, setIsTabExpanded] = useState(false);

  function buttonClickHandler() {
    setIsTabExpanded((prevState) => (prevState ? false : true));
  }

  return (
    <div className={classes.tab}>
      <button onClick={buttonClickHandler}>
        <h3>{props.buttonTitle}</h3>
        <p>{isTabExpanded ? '-' : '+'}</p>
      </button>
      <div
        className={`${classes.content} ${
          isTabExpanded ? classes.show : classes.hide
        }`}
      >
        <h4>{props.contentTitle}</h4>
        <p>{props.contentBody}</p>
      </div>
    </div>
  );
}

export default MobileAccordionTab;
