import React, {forwardRef, useEffect} from 'react';
import '../App/index.css';

const NeApp = forwardRef(({count, buttonRef}, ref) => {

  useEffect(() => {
    setTimeout(()=> buttonRef.current.style.backgroundColor="red", 2000)
  }, [buttonRef])

  return (
        <div
          className="App-link"
          ref={ref}
          onClick={() => {}}
        >
          CurrentOffset&Count: {count}
        </div>
  );
});

export default NeApp;