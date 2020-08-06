import React from 'react';
import '../App/index.css';
import NeApp3 from '../NeApp3';
import {AppContext} from '../context/AppState'
// import useNeApp2 from './useNeApp2';

const NeApp2 = () => {
  const num =  2;
  const {state:{count, id}} = React.useContext(AppContext);
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const ultraString = id.slice(count);
  // const {ultraString} = useNeApp2({num});

  return (
    <>
      <div
        className="App-link"
        onClick={() => {}}
      >
        NeApp2 No need count value and do not get it
      </div>
      <p>Ultra string from id and count: {ultraString}</p>
      <NeApp3 />
    </>
  );
};

export default NeApp2;