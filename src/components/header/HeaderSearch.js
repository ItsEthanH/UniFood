import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './HeaderSearch.module.css';

function HeaderSearch() {
  const inputRef = useRef();
  const navigate = useNavigate();

  function searchSubmitHandler(event) {
    event.preventDefault();
    const query = inputRef.current.value.trim().replaceAll(' ', '+'); //cuts whitespace from start and end of query, replaces spaces with +
    if (!query) {
      return;
    }

    navigate('/results/' + query);
  }

  return (
    <form onSubmit={searchSubmitHandler} action="POST">
      <input ref={inputRef} type="text" placeholder="Search for Recipes" />
    </form>
  );
}

export default HeaderSearch;
