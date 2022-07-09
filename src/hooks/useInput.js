import { useState } from 'react';

function useInput(validateFn) {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateFn(value);
  const hasError = !isValid && isTouched;

  function valueChangeHandler(event) {
    setValue(event.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  function reset() {
    setIsTouched(false);
    setValue('');
  }

  return {
    value,
    isValid,
    hasError,
    setIsTouched,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
