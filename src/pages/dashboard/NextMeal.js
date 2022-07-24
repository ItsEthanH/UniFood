import React from 'react';

import classes from './styles/NextMeal.module.css';
import placeholder from '../../assets/placeholders/placeholder-dashboard.jpg';

import SectionTitle from '../../components/ui/SectionTitle';
import DashboardCard from './DashboardCard';

function NextMeal() {
  return (
    <div className={classes['next-meal']}>
      <SectionTitle>Next Meal</SectionTitle>
      <DashboardCard
        type="Breakfast"
        name="Velvet Victoria Sponge"
        src={placeholder}
        next={true}
      />
    </div>
  );
}

export default NextMeal;
