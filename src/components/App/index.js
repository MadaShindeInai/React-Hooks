import React, {useState, useRef, useEffect, useCallback, useMemo} from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';

function compareNumbers(a, b) {
  return a - b;
}

const makeHelloooo = (hello) => {
  const Helloooo = `${hello}ooo`;
  console.log('Not rerendered');
  return Helloooo;
};


const App = () => {
  const [count, setCount] = useState(0);
  const hello = 'Hello';
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
  // 1
  // const clickAlert = useCallback(() =>  {alert(`I am click ${count}`)},[count]);
  
  // useEffect(() => {
  //   const clickAlert = () =>  alert(`I am click ${count}`);
  //   const button = buttonRef.current;
  //   button.addEventListener('click', clickAlert)
  //   return () => button.removeEventListener('click', clickAlert)
  // },[count]);
  
  //2
  const memoisedmakeHelloooo = useMemo(()=> makeHelloooo(hello),[hello])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter value: {count}</p>
          <p>{makeHelloooo(hello)}</p>
          {/* <p>{memoisedmakeHelloooo}</p> */}
        <div
          className="App-link"
          onClick={() => setCount(count + 1)}
        >
          Click to +1 count
        </div>
      </header>
    </div>
  );
} 

export default App;
