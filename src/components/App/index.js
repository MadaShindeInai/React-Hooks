import React, {useState, useRef, useEffect, useCallback, useMemo} from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';

// 2
// const hello = 'Hello';
// const makeHelloooo = (hello) => {
  //   const Helloooo = `${hello}111`;
  //   console.log('RenderString');
  //   return Helloooo;
  // };
  
// 3
// const arrT= [10,9,8,7,6,5,4,3,2,1,0]; 
// const sortArr = (arr) => {
//   console.log('RenderedArr');
//   return arr.sort((a, b) =>  a - b).join(',');
// };


const App = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
  // 1
  // const clickAlert = useCallback(() =>  {console.log(`I am click ${count}`)},[count]);
  
  useEffect(() => {
    const clickAlert = () =>  alert(`I am click ${count}`);
    const button = buttonRef.current;
    button.addEventListener('click', clickAlert)
    return () => button.removeEventListener('click', clickAlert)
  },[count]);
  
  //2
  // const memoisedMakeHelloooo = useMemo(()=> makeHelloooo(hello),[])
  //3
  // const memoisedMakeHelloooo2 = useMemo(()=> sortArr(arrT),[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter value: {count}</p>
          {/* <p>{makeHelloooo(hello)}</p>
          <p>{memoisedMakeHelloooo}</p> */}
          {/* <p>{sortArr(arrT)}</p>
          <p>{memoisedMakeHelloooo2}</p> */}
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
