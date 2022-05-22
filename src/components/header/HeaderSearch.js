import React, { useContext } from 'react';
import PageContext from '../store/page-context';

import './HeaderSearch.module.css';

function HeaderSearch() {
  const pageCtx = useContext(PageContext);

  function search(event) {
    event.preventDefault();
    pageCtx.onChange('Results');
  }

  return (
    <form onSubmit={search} action="POST">
      <input type="text" placeholder="Search for Recipes" />
    </form>
  );
}

export default HeaderSearch;
