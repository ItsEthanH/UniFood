import { useState } from 'react';

function useInput(id, name, validateFn, isPassword = false) {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const type = isPassword ? 'password' : 'text';

  const isValid = validateFn(value);
  const hasError = !isValid && isTouched;

  function valueChangeHandler(event) {
    setValue(event.target.value);
  }

  function inputBlurHandler() {
    setIsTouched(true);
  }

  return {
    id,
    name,
    type,
    value,
    isValid,
    hasError,
    setIsTouched,
    valueChangeHandler,
    inputBlurHandler,
  };
}

export default useInput;
