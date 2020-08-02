import React, { useContext } from 'react';
import '../App/index.css';
import NeApp1 from '../NeApp1';
import {COUNT_UP} from '../../constants';
import {AppContext} from '../context/AppState'

const NeApp = () => {
  const {state:{count}, dispatch} = useContext(AppContext);
  return (
    <>
      <div
        className="App-link"
        onClick={() => dispatch({type: COUNT_UP, payload: 1})}
      >
        NeApp Count:{count}
      </div>
      <NeApp1 />
    </>
  );
};

export default NeApp;