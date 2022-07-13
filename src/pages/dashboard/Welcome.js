import React from 'react';

import classes from './styles/Welcome.module.css';

function Welcome() {
  const hour = new Date().getHours();
  let greeting = 'Hello, SAMPLE_NAME!';

  if (hour < 12) {
    greeting = 'Good Morning, SAMPLE_NAME!';
  } else if (hour < 18) {
    greeting = 'Good Afternoon, SAMPLE_NAME!';
  } else if (hour > 18) {
    greeting = 'Good Evening, SAMPLE_NAME!';
  }

  return <h2 className={classes.greeting}>{greeting}</h2>;
}

export default Welcome;
