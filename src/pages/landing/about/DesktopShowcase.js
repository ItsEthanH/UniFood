import { useState } from 'react';

import classes from './styles/DesktopShowcase.module.css';

function DesktopShowcase({ content }) {
  let animationTimeout;
  const [animation, setAnimation] = useState(false);
  const [tab, setTab] = useState(content.Recipes);

  function tabChangeHandler(event) {
    clearTimeout(animationTimeout); // allows spamming of button clicks without breaking

    setAnimation(true);
    setTab(content[event.target.id]);

    animationTimeout = setTimeout(() => {
      setAnimation(false);
    }, 750);
  }

  const renderedShowcaseButtons = Object.keys(content).map((feature, index) => (
    <li className={tab.title === content[feature].title ? classes.active : ''}>
      <button id={feature} className="body" onClick={tabChangeHandler}>
        {feature.replace('_', ' ')}
      </button>
    </li>
  ));

  return (
    <>
      <div className={classes.tabbar}>
        <ul>{renderedShowcaseButtons}</ul>
      </div>
      <div className={`${classes.content} ${animation ? classes.fade : ''}`}>
        <div className={classes.text}>
          <h3 className="subheading">{tab.title}</h3>
          <p className="body-large margin-2r0">{tab.description}</p>
        </div>
        <img src={tab.image} alt={tab.title} />
      </div>
    </>
  );
}

export default DesktopShowcase;
