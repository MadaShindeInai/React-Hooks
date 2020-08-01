import React from 'react';
import '../App/index.css';
import NeApp2 from '../NeApp2';

const NeApp1 = (props) => {
  const {count} = props;

  return (
    <>
      <div
        className="App-link"
        onClick={() => {}}
      >
        NeApp1 Count:{count}
      </div>
      <NeApp2 count={count}/>
    </>
  );
};

export default NeApp1;