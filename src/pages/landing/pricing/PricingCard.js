import classes from './styles/PricingCard.module.css';

function PricingCard(props) {
  let tier;
  let price;
  let colour;

  switch (props.type) {
    case 0:
      tier = 'Unifood';
      price = <>Free</>;
      colour = classes.bronze;
      break;

    case 1:
      tier = 'Unifood Pro';
      price = (
        <>
          £<span className="body-bold">3.99</span>/pcm
        </>
      );
      colour = classes.silver;
      break;

    case 2:
      tier = 'Unifood';
      price = (
        <>
          £<span className="body-bold">9.99</span>/pcm
        </>
      );
      colour = classes.gold;
      break;
  }

  return (
    <div className={`${classes.card} ${props.styles}`}>
      <div className={`${classes.header} ${colour}`}>
        <h2 className="body-large">{tier}</h2>
        <p className="body-large">{price}</p>
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
