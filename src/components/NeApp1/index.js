import React from 'react';
import '../App/index.css';
import NeApp2 from '../NeApp2';
import {COUNT_DOWN} from '../../constants';
import {AppContext} from '../context/AppState'

const NeApp1 = () => {
  const {state:{count}, dispatch} = React.useContext(AppContext);
  return (
    <>
      <div
        className="App-link"
        onClick={() => dispatch({type: COUNT_DOWN})}
      >
        NeApp1 Count:{count}
      </div>
      <NeApp2 />
    </>
  );
};

export default NeApp1;