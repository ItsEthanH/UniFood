import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import PortalActions from './PortalActions';
import PortalInput from './PortalInput';

import classes from './styles/PortalForm.module.css';

function PortalForm() {
  const {
    path,
    errorMessages,
    setErrorMessages,
    isFormLogin,
    isFormSubmitted,
    submitHandler,
    fetchHook,
    formInputs,
  } = useOutletContext();

  // dynamic error messages shown with useEffect. only shown if the form is submitted
  useEffect(() => {
    setErrorMessages([]);
    let formIncomplete = false;

    Object.keys(formInputs).map((input) => {
      if (formInputs[input].value.trim() === '') {
        formIncomplete = true;
      }
    });

    if (isFormSubmitted && formIncomplete) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please ensure all fields are completed',
      ]);
    }

    if (isFormSubmitted && !formInputs.email.isValid) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please enter a valid email',
      ]);
    }

    if (isFormSubmitted && formInputs.password.hasError) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Your password should be 8 characters or longer',
      ]);
    }

    if (
      isFormSubmitted &&
      !isFormLogin &&
      formInputs.password.value !== formInputs.confirmPassword.value
    ) {
      setErrorMessages((prevMsgs) => [
        ...prevMsgs,
        'Please make sure both passwords match',
      ]);
    }
  }, [formInputs]);

  // all states cleared when the form is changed begin login/register
  useEffect(() => {
    setErrorMessages([]);
    fetchHook.clearStates();
  }, [path]);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {Object.keys(formInputs).map((input) => {
        return (
          <PortalInput
            ref={formInputs[input].ref}
            key={formInputs[input].id}
            id={formInputs[input].id}
            label={formInputs[input].label}
            type={formInputs[input].type}
            value={formInputs[input].value}
            onChange={formInputs[input].valueChangeHandler}
            onBlur={formInputs[input].inputBlurHandler}
            hasError={formInputs[input].hasError}
          />
        );
      })}
      <PortalActions
        errorMessages={errorMessages}
        fetchInfo={fetchHook}
        isFormLogin={isFormLogin}
      />
    </form>
  );
}

export default PortalForm;
