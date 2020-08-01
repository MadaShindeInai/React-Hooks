import React from 'react';
import '../App/index.css';
import NeApp3 from '../NeApp3';

const NeApp2 = (props) => {
  const {count} = props;

  return (
    <>
      <div
        className="App-link"
        onClick={() => {}}
      >
        NeApp2 No need count value but get it
      </div>
      <NeApp3 count={count}/>
    </>
  );
};

export default NeApp2;