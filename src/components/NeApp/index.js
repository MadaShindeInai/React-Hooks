import React, { useContext } from 'react';
import '../App/index.css';
import NeApp1 from '../NeApp1';
import {AppContext} from '../context/AppState'

const NeApp = () => {
  const {state:{count}, increace} = useContext(AppContext);
  return (
    <>
      <div
        className="App-link"
        onClick={() => increace(1)}
      >
        NeApp Count:{count}
      </div>
      <NeApp1 />
    </>
  );
};

export default NeApp;