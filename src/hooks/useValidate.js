import { useState, useEffect } from 'react';

function adfs(submissionStatus, ...fieldsToValidate) {
  const [errorMessages, setErrorMessages] = useState([]);
  let dependancies = [submissionStatus];

  for (const field of fieldsToValidate) {
    console.log(field);
    dependancies.push(field.value);
  }

  console.log(dependancies);

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
