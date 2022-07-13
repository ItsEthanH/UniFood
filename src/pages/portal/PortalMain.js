import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useFetch from '../../hooks/useFetch';
import useValidate from '../../hooks/useValidate';

import LandingTitle from '../landing/LandingTitle';

import classes from './styles/PortalMain.module.css';

let isFormSubmitted = false;

function PortalMain() {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const fetchHook = useFetch();
  const response = fetchHook.response;

  const [isFormLogin, setIsFormLogin] = useState(path === '/portal/signin');

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const fnameInput = useInput(
    'fname',
    'First Name',
    (value) => value.trim() !== ''
  );

  const lnameInput = useInput(
    'lname',
    'Last Name',
    (value) => value.trim() !== ''
  );

  const emailInput = useInput('email', 'Email', (value) =>
    emailRegex.test(value)
  );

  const passwordLoginInput = useInput(
    'password',
    'Password',
    (value) => value.length >= 8
  );

  const passwordRegisterInput = useInput(
    'password',
    'Password',
    (value) => value.length >= 8 && value === confirmPasswordRef.current.value
  );

  const confirmPasswordInput = useInput(
    'confirm-password',
    'Confirm Password',
    (value) => value.length >= 8 && value === passwordRef.current.value
  );

  const loginInputs = [emailInput, passwordLoginInput];
  const registerInputs = [
    fnameInput,
    lnameInput,
    emailInput,
    passwordRegisterInput,
    confirmPasswordInput,
  ];

  function changeForm() {
    if (isFormLogin) {
      navigate('/portal/register');
    } else {
      navigate('/portal/signin');
    }
    setIsFormLogin((prev) => !prev);
  }

  function checkFormValidity(inputArray) {
    inputArray.forEach((input) => input.setIsTouched(true));

    for (const input of inputArray) {
      if (!input.isValid) {
        return false;
      }
    }

    return true;
  }

  function submitHandler(event, options) {
    event.preventDefault();
    isFormSubmitted = true;
    let isFormValid;

    if (isFormLogin) {
      isFormValid = checkFormValidity(loginInputs);
    } else {
      isFormValid = checkFormValidity(registerInputs);
    }

    if (!isFormValid) {
      return;
    }

    fetchHook.sendRequest('/login', options);
  }

  useEffect(() => {
    // a failed login means response === false. return an error message in that case
    if (response === false) {
      const failedAuthMsg = isFormLogin
        ? 'Your email or password is incorrect. Please try again!'
        : 'There was an error with registration. Please try again!';
      setErrorMessages([failedAuthMsg]);
      return;
    }

    // on component mount, response is initialised as null. this returns the function without an error message, as no submission has occured
    if (!response) {
      return;
    }

    login();
    navigate('/app', { replace: true });
  }, [response]);

  return (
    <main className={classes.main}>
      <LandingTitle>
        <span className="color-primary">
          {isFormLogin ? 'Login' : 'Register'}
        </span>
      </LandingTitle>
      <p className={classes.subtitle}>
        {isFormLogin ? 'Log back into UniFood!' : 'Make a UniFood account!'}
      </p>
      <Outlet
        context={{
          submitHandler,
          fetchHook,
          formInputs: isFormLogin ? loginInputs : registerInputs,
        }}
      />
      <a onClick={changeForm}>
        {isFormLogin
          ? "Don't have an account? Sign up!"
          : 'Already have an account? Sign in!'}
      </a>
    </main>
  );
}

export default PortalMain;
