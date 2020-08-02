import React, {createContext, FC, useReducer} from 'react';
import {COUNT_UP, COUNT_ZERO, COUNT_DOWN} from '../../constants';
import appReducer from './appReducer';

type AppContextType = {
  state: {
    count: number;
    id: string;
  },
  dispatch: any
  increace: (payload: number) => void;
  decreace: () => void;
  makeZero: () => void;
};

export const AppContext = createContext({} as AppContextType);

export const AppState: FC<any> = ({children}) => {
  const initialState = {
    count: 0,
    id: Date.now().toString()
  }
  const [state, dispatch] = useReducer(appReducer, initialState);

  const increace = (payload: number) => dispatch({type: COUNT_UP, payload})
  const decreace = () => dispatch({type: COUNT_DOWN})
  const makeZero = () => dispatch({type: COUNT_ZERO})

  return (
    <AppContext.Provider value={{state, dispatch, increace, decreace, makeZero}}>
      {children}
    </AppContext.Provider>
  );
};
