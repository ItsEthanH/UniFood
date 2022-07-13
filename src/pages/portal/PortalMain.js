import { useState, useEffect, useRef, useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useFetch from '../../hooks/useFetch';
import AuthContext from '../../context/AuthContext';

import LandingTitle from '../landing/LandingTitle';

import classes from './styles/PortalMain.module.css';

let isFormSubmitted = false;

function PortalMain() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const [isFormLogin, setIsFormLogin] = useState(path === '/portal/signin');
  const [errorMessages, setErrorMessages] = useState([]);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const fetchHook = useFetch();
  const response = fetchHook.response;

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

  function submitHandler(event) {
    event.preventDefault();
    isFormSubmitted = true;
    let isFormValid;
    let options;
    let endpoint;

    if (isFormLogin) {
      isFormValid = checkFormValidity(loginInputs);

      if (!isFormValid) {
        return;
      }

      endpoint = '/login';
      options = {
        method: 'POST',
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordLoginInput.value,
        }),
        header: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    } else {
      isFormValid = checkFormValidity(registerInputs);

      if (!isFormValid) {
        return;
      }

      endpoint = '/register';
      options = {
        method: 'POST',
        body: JSON.stringify({
          firstName: fnameInput.value,
          lastName: lnameInput.value,
          email: emailInput.value,
          password: passwordRegisterInput.value,
          confirmPassword: confirmPasswordInput.value,
        }),
        header: {
          'Access-Control-Allow-Origin': '*',
        },
      };
    }

    console.log('send');
    fetchHook.sendRequest(endpoint, options);
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
          path,
          errorMessages,
          setErrorMessages,
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
