import { useState } from 'react';

import classes from './styles/IconWithTooltip.module.css';

function IconWithTooltip({ icon, tooltipText = '', onClick = () => null }) {
  const [tooltip, setTooltip] = useState('');

  function showTooltip() {
    if (!tooltipText) return;
    setTooltip(tooltipText);
  }

  function hideTooltip() {
    setTooltip('');
  }

  return (
    <button className={classes.button} onClick={onClick}>
      <img onMouseEnter={showTooltip} onMouseLeave={hideTooltip} src={icon} alt={tooltipText} />
      {tooltip && <p className="body-small">{tooltip}</p>}
    </button>
  );
}

export default IconWithTooltip;
