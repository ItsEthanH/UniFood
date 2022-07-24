import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './styles/HeaderSearch.module.css';

function HeaderSearch() {
  const inputRef = useRef();
  const navigate = useNavigate();

  function searchSubmitHandler(event) {
    event.preventDefault();
    const query = inputRef.current.value
      .trim()
      .replaceAll(' ', '+') //cuts whitespace from start and end of query, replaces spaces with +, all to lowercase
      .toLowerCase();
    if (!query) {
      return;
    }

    navigate('/app/results/' + query, { replace: true });
  }

  return (
    <form
      className={classes.searchbar}
      onSubmit={searchSubmitHandler}
      action="POST"
    >
      <input ref={inputRef} type="text" placeholder="Search for Recipes" />
    </form>
  );
}

export default HeaderSearch;
