import React, {createContext, FC, useReducer} from 'react';
import {COUNT_UP, COUNT_ZERO, COUNT_DOWN} from '../../constants';
import appReducer from './appReducer';

type AppContextType = {
  state: {
    count: number;
    id: string;
  },
  dispatch: any
};

export const AppContext = createContext({} as AppContextType);

export const AppState: FC<any> = ({children}) => {
  const initialState = {
    count: 0,
    id: Date.now.toString()
  }
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};
