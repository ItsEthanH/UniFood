import classes from './PricingCard.module.css';

function PricingCard(props) {
  let tier;
  let price;
  let colour;

  switch (props.type) {
    case 0:
      tier = 'Unifood';
      price = <p>Free</p>;
      colour = classes.bronze;
      break;

    case 1:
      tier = 'Unifood Pro';
      price = (
        <p>
          <sup>£</sup>3.99<sub>/pcm</sub>
        </p>
      );
      colour = classes.silver;
      break;

    case 2:
      tier = 'Unifood';
      price = (
        <p>
          <sup>£</sup>9.99<sub>/pcm</sub>
        </p>
      );
      colour = classes.gold;
      break;
  }

  return (
    <div className={`${classes.card} ${props.styles}`}>
      <div className={`${classes.header} ${colour}`}>
        <h2>{tier}</h2>
        {price}
      </div>
      <ul>
        <li>Lorem ipsum</li>
        <li>Fugiat sunt</li>
        <li>Maiores culpa</li>
        <li>Asperiores modi</li>
        <li>Vitae similique</li>
      </ul>
    </div>
  );
}

export default PricingCard;
