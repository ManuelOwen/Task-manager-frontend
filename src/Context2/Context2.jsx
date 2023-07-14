import React, { createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer2';

const INITIAL_STATE = {
  navigator: JSON.parse(localStorage.getItem('navigator')) || 'home',
};

export const Context2 = createContext(INITIAL_STATE);

export const NavigatorContext2Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('navigator', JSON.stringify(state.navigator));
  }, [state.navigator]);

  return (
    <Context2.Provider value={{ navigator: state.navigator, dispatch }}>
      {children}
    </Context2.Provider>
  );
};
