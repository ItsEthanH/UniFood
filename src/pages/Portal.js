import { useParams, Link } from 'react-router-dom';

import classes from './styles/Portal.module.css';

function Portal() {
  const params = useParams();

  return (
    <div>
      <h1>Hi</h1>
      <Link to="/app/dashboard">Go</Link>
    </div>
  );
}

export default Portal;
