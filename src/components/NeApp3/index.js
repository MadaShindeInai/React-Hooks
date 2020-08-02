import React, {useContext} from 'react';
import '../App/index.css';
import {AppContext} from '../context/AppState'

const NeApp3 = () => {
  const {state:{count}, makeZero} = useContext(AppContext);
  return (
    <>
      <div
        className="App-link"
        onClick={() => makeZero()}
      >
        NeApp3 Count:{count}
      </div>
    </>
  );
};

export default NeApp3;