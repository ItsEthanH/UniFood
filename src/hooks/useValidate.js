import { useState, useEffect } from 'react';

function adfs(submissionStatus, ...fieldsToValidate) {
  const [errorMessages, setErrorMessages] = useState([]);
  let dependancies = [submissionStatus];

  for (const field of fieldsToValidate) {
    dependancies.push(field.value);
  }

  useEffect(() => {
    setErrorMessages([]);

    for (const field of fieldsToValidate) {
      if (submissionStatus && field.value) {
        setErrorMessages((prevMsgs) => [...prevMsgs, field.message]);
      }
    }
  }, dependancies);

  return [errorMessages, setErrorMessages];
}

export default useValidate;
