import React, {useContext} from 'react';
import '../App/index.css';
import {COUNT_ZERO} from '../../constants';
import {AppContext} from '../context/AppState'

const NeApp3 = () => {
  const {state:{count}, dispatch} = useContext(AppContext);
  return (
    <>
      <div
        className="App-link"
        onClick={() => dispatch({type: COUNT_ZERO})}
      >
        NeApp3 Count:{count}
      </div>
    </>
  );
};

export default NeApp3;