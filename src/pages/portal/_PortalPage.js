import { useState, useEffect, useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import AuthContext from '../../context/AuthContext';

import classes from './styles/_PortalPage.module.css';
import image from '../../assets/landing/portal.jpg';

function PortalPage() {
  const fetchInfo = useFetch();
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [isFormLogin, setIsFormLogin] = useState(location.pathname === '/portal/signin');
  const [errorMessages, setErrorMessages] = useState([]);

  const title = isFormLogin ? 'Login' : 'Register';
  const tagline = isFormLogin ? 'Log back into UniFood!' : 'Make a UniFood account!';

  function changeForm() {
    if (isFormLogin) {
      navigate('/portal/register');
    } else {
      navigate('/portal/signin');
    }
    setIsFormLogin((prev) => !prev);
  }

  function authoriseAccess(requestOptions) {
    event.preventDefault();
    let endpoint = '/login';

    if (!isFormLogin) {
      endpoint = '/register';
    }

    fetchInfo.sendRequest(endpoint, requestOptions);
  }

  useEffect(() => {
    // a failed login means response === false. return an error message in that case
    if (fetchInfo.response === false && isFormLogin) {
      setErrorMessages(['Your email or password is incorrect. Please try again!']);
      return;
    }

    if (fetchInfo.error && !isFormLogin) {
      console.log(fetchInfo.error);
      setErrorMessages([fetchInfo.error]);
      return;
    }

    // on component mount, response is initialised as null. this returns the function without an error message, as no submission has occured
    if (!fetchInfo.response) {
      return;
    }

    login(fetchInfo.response[1]);
    navigate('/app', { replace: true });
  }, [fetchInfo.response]);

  const outletContext = {
    isFormLogin,
    changeForm,
    authoriseAccess,
    fetchInfo,
    errorMessages,
    setErrorMessages,
  };

  return (
    <div className={classes.wrapper}>
      <img src={image} alt="A colourful selection of vegetables on a dark oak table" />
      <main className={classes.page}>
        <h3>
          <span className="color-primary">{title}</span>
        </h3>

        <p className={classes.tagline}>{[tagline]}</p>

        <Outlet context={outletContext} />
      </main>
    </div>
  );
}

export default PortalPage;
