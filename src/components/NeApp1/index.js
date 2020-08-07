import React from 'react';
import '../App/index.css';
import NeApp2 from '../NeApp2';
import {AppContext} from '../context/AppState'

const NeApp1 = () => {
  const {state:{count}, decreace} = React.useContext(AppContext);
  return (
    <>
      <div
        className="App-link"
        // onClick={() => dispatch({type: COUNT_DOWN})}
        onClick={decreace}
      >
        NeApp1 Count:{count}
      </div>
      <NeApp2 />
    </>
  );
};

export default NeApp1;