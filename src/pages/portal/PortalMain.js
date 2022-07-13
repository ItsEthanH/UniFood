import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useFetch from '../../hooks/useFetch';

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

  // using useInput to generate form validation functions
  const fnameInput = useInput((value) => value.trim() !== '');
  const lnameInput = useInput((value) => value.trim() !== '');
  const emailInput = useInput((value) => emailRegex.test(value));
  const passwordLoginInput = useInput((value) => value.length >= 8);
  const passwordRegisterInput = useInput(
    (value) => value.length >= 8 && value === confirmPasswordRef.current.value
  );
  const confirmPasswordInput = useInput(
    (value) => value.length >= 8 && value === passwordRef.current.value
  );

  // generating input objects to pass onto PortalForm
  const loginInputs = {
    email: {
      ...emailInput,
      id: 'email',
      label: 'Email',
      type: 'text',
      ref: null,
    },
    password: {
      ...passwordLoginInput,
      id: 'password',
      label: 'Password',
      type: 'password',
      ref: null,
    },
  };

  const registerInputs = {
    fname: {
      ...fnameInput,
      id: 'fname',
      label: 'First Name',
      type: 'text',
      ref: null,
    },
    lname: {
      ...lnameInput,
      id: 'lname',
      label: 'Last Name',
      type: 'text',
      ref: null,
    },
    email: {
      ...emailInput,
      id: 'email',
      label: 'Email',
      type: 'text',
      ref: null,
    },
    password: {
      ...passwordRegisterInput,
      id: 'password',
      label: 'Password',
      type: 'password',
      ref: passwordRef,
    },
    confirmPassword: {
      ...confirmPasswordInput,
      id: 'confirm-password',
      label: 'Confirm Password',
      type: 'password',
      ref: confirmPasswordRef,
    },
  };

  // all form handling and validation is handled here, as register/login logic is mostly the same
  function changeForm() {
    isFormSubmitted = false;
    if (isFormLogin) {
      navigate('/portal/register');
    } else {
      navigate('/portal/signin');
    }

    // clear all inputs when changing forms
    Object.keys(registerInputs).map((input) => {
      registerInputs[input].reset();
      if (loginInputs[input]) {
        loginInputs[input].reset();
      }
    });

    setIsFormLogin((prev) => !prev);
  }

  function checkFormValidity(inputArray) {
    let formIsValid = true;

    Object.keys(inputArray).map((input) => {
      inputArray[input].setIsTouched(true);
      if (!inputArray[input].isValid) {
        formIsValid = false;
      }
    });

    return formIsValid;
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
          isFormLogin,
          isFormSubmitted,
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
