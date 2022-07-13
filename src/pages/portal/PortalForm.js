import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import PortalActions from './PortalActions';
import PortalInput from './PortalInput';

import classes from './styles/PortalForm.module.css';

function PortalForm() {
  const [errorMessages, setErrorMessages] = useState([]);
  const { isFormLogin, isFormSubmitted, submitHandler, fetchHook, formInputs } =
    useOutletContext();

  useEffect(() => {
    setErrorMessages([]);
    // if (hasLoginBeenSubmitted && fieldIsIncomplete) {
    //   setErrorMessages((prevMsgs) => [
    //     ...prevMsgs,
    //     'Please ensure all fields are completed',
    //   ]);
    // }

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
  }, [formInputs]);

  useEffect(() => {
    setErrorMessages([]);
  }, [isFormLogin]);

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
      {/* {formInputs.keys().map((input) => {
        return (
          <PortalInput
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            value={input.value}
            onChange={input.valueChangeHandler}
            onBlur={input.inputBlurHandler}
            hasError={input.hasError}
          />
        );
      })} */}
      <PortalActions errorMessages={errorMessages} fetchInfo={fetchHook} />
    </form>
  );
}

export default PortalForm;
