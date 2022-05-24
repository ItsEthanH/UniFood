import React from 'react';

import classes from './Recipe.module.css';
import viewIcon from '../../assets/ui/view.png';
import favouriteIcon from '../../assets/ui/favourite.png';
import planIcon from '../../assets/ui/plan.png';
import cartIcon from '../../assets/ui/cart.png';

import placeholder from '../../assets/dashboard/placeholder-meal.jpg';
import placeholder2 from '../../assets/search/placeholder-search.jpg';

import RecipeSection from './RecipeSection';
import SectionTitle from '../ui/SectionTitle';
import RecipeIcon from './RecipeIcon';

function Recipe(props) {
  return (
    <React.Fragment>
      <RecipeSection>
        <img className={classes.image} src={placeholder} alt="" />
        <SectionTitle center={true}>Recipe Title</SectionTitle>
        <div className={classes.stats}>
          <p>
            60<span>mins</span>
          </p>
          <div className={classes.divider}></div>
          <p>
            xxx<span>cal</span>
          </p>
          <div className={classes.divider}></div>
          <p>
            90<span>/100</span>
          </p>
          <div className={classes.divider}></div>
          <p>
            4<span>serves</span>
          </p>
        </div>
        <hr />
        <div className={classes.actions}>
          <RecipeIcon icon={viewIcon}></RecipeIcon>
          <RecipeIcon icon={favouriteIcon}></RecipeIcon>
          <RecipeIcon icon={planIcon}></RecipeIcon>
          <RecipeIcon icon={cartIcon}></RecipeIcon>
        </div>
        <hr />
        <div className={classes.ingredients}>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Incidunt, laboriosam?</li>
            <li>Atque, praesentium!</li>
            <li>Hic, labore?</li>
            <li>Porro, obcaecati.</li>
            <li>Distinctio, nihil?</li>
            <li>Sapiente, magni.</li>
            <li>Corporis, amet.</li>
            <li>Modi, sapiente?</li>
            <li>Tempore, saepe!</li>
          </ul>
        </div>
      </RecipeSection>

      <RecipeSection>
        <SectionTitle center={true}>Instructions</SectionTitle>
        <hr />
        <ol className={classes.instructions}>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            voluptatem ducimus nostrum, vel delectus fugiat.
          </li>
          <li>
            Delectus ex id fugiat soluta, amet ab provident sequi facere
            repellat minima quas voluptas nemo.
          </li>
          <li>
            Deserunt, officia maxime. Ipsum aut itaque id amet soluta atque esse
            laborum laboriosam libero est!
          </li>
          <li>
            Numquam facere tenetur repellat temporibus, saepe neque enim animi
            voluptatum. Explicabo nulla laborum veniam quis.
          </li>
          <li>
            Ea id, quod dolore iure, veniam soluta adipisci corporis maxime
            voluptates tenetur nemo placeat fugit.
          </li>
          <li>
            Illum, molestiae ea voluptatum labore numquam doloremque quo
            reiciendis tenetur dolor debitis unde voluptatibus cumque!
          </li>
          <li>
            Recusandae, quibusdam! Necessitatibus, magnam illum, iste
            accusantium saepe placeat in, nam debitis illo aliquam minima.
          </li>
        </ol>
      </RecipeSection>

      <RecipeSection info={true}>
        <div className={classes.subsection}>
          <SectionTitle center={true}>Nutritional Information</SectionTitle>
          <hr />
        </div>
        <div className={classes.subsection}>
          <SectionTitle center={true}>Dietary Information</SectionTitle>
          <hr />
        </div>
        <div className={classes.subsection}>
          <SectionTitle center={true}>Related Recipes</SectionTitle>
          <hr />
          <div className={classes.recommendation}>
            <img src={placeholder2} alt="" />
            <h4>Sample Recommendation</h4>
          </div>
          <div className={classes.recommendation}>
            <img src={placeholder2} alt="" />
            <h4>Sample Recommendation</h4>
          </div>
        </div>
      </RecipeSection>
    </React.Fragment>
  );
}

export default Recipe;
