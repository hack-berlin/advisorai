// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};