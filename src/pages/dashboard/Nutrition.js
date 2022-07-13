import React from 'react';

import SectionTitle from '../../components/ui/SectionTitle';

import classes from './styles/Nutrition.module.css';

function Nutrition() {
  return (
    <div className={classes['nutrition']}>
      <SectionTitle>Nutrition</SectionTitle>
    </div>
  );
}

export default Nutrition;
