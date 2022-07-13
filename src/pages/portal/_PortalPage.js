import PortalMain from './PortalMain';

import classes from './styles/Portal.module.css';
import image from '../../assets/landing/portal.jpg';

function PortalPage() {
  return (
    <div className={classes.wrapper}>
      <img
        src={image}
        alt="A colourful selection of vegetables on a dark oak table"
      />
      <PortalMain />
    </div>
  );
}

export default PortalPage;
