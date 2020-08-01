import React, {useState, useRef, useEffect, useCallback, useMemo} from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';


// const makeHelloooo = (hello) => {
//   const Helloooo = `${hello}111`;
//   console.log('Rendered');
//   return Helloooo;
// };

// const sortArr = (arr) => {
//   console.log('Rendered');
//   return arr.join(',');
// };
// const arrT= [10,9,8,7,6,5,4,3,2,1,0]; массив данных который мы откуда-то забрали


const App = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);
  // const hello = 'Hello';

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
  // 1
  // const clickAlert = useCallback(() =>  {console.log(`I am click ${count}`)},[count]);
  
  // useEffect(() => {
  //   // const clickAlert = () =>  alert(`I am click ${count}`);
  //   const button = buttonRef.current;
  //   button.addEventListener('click', clickAlert)
  //   return () => button.removeEventListener('click', clickAlert)
  // },[clickAlert]);
  
  //2
  // const memoisedMakeHelloooo = useMemo(()=> makeHelloooo(hello),[])
  // const memoisedMakeHelloooo = useMemo(()=> sortArr(arrT),[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter value: {count}</p>
          {/* <p>{makeHelloooo(hello)}</p> */}
          {/* <p>{memoisedMakeHelloooo}</p> */}
        <div
          className="App-link"
          ref={buttonRef}
          onClick={() => setCount(count + 1)}
        >
          Click to +1 count
        </div>
      </header>
    </div>
  );
} 

export default App;
