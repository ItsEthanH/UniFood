import React, { useState } from 'react';

const PageContext = React.createContext({ page: 'Dashboard' });

export function PageContextProvider(props) {
  const [page, setPage] = useState('Dashboard');

  function changePage(page) {
    setPage(page);
  }

  return (
    <PageContext.Provider
      value={{
        page: page,
        onChange: changePage,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
}

export default PageContext;
