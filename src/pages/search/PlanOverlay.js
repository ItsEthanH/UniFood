import { useState, useEffect, useRef } from 'react';

import Modal from '../../components/ui/Modal';
import ResultButton from './ResultButton';

import classes from './styles/PlanOverlay.module.css';
import meal from '../../assets/svgs/meal.svg';
import date from '../../assets/svgs/date.svg';

function PlanOverlay(props) {
  const [errorMessages, setErrorMessages] = useState([]);

  const typeRef = useRef();
  const dateRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    setErrorMessages([]);

    const typeValue = typeRef.current.value;
    const dateValue = dateRef.current.valueAsDate;
    const today = new Date();

    if (!typeValue || !dateValue) {
      setErrorMessages((prevErrors) => [...prevErrors, 'Both fields need to be completed!']);
      return;
    }

    if (
      Date.parse(dateValue) < today.getTime() &&
      dateValue.toDateString() !== today.toDateString()
    ) {
      setErrorMessages((prevErrors) => [...prevErrors, 'The date cannot be in the past!']);
      return;
    }

    props.onSubmit(typeValue, dateValue);
    props.onClose();
  }

  return (
    <Modal onClose={props.onClose}>
      <h3 className={classes.title}>Choose your meal type and date</h3>
      <form className={classes.form} onSubmit={submitHandler}>
        <fieldset>
          <legend>Meal Type</legend>
          <select name="type" id="type" ref={typeRef}>
            <option value="" selected>
              Choose Meal Type
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <img src={meal} alt="Meal" />
        </fieldset>
        <fieldset>
          <legend>Date</legend>
          <input type="date" ref={dateRef} />
          <img src={date} alt="Date" />
        </fieldset>
        <ResultButton text="Set plan" />
      </form>
      {errorMessages && errorMessages.map((msg) => <p className={classes.error}>{msg}</p>)}
    </Modal>
  );
}

export default PlanOverlay;
