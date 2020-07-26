import React, {useState} from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';

const App = () => {
  const [count, setCount] = useState(0);
  // const count = 43;
  // const [ obj, setObj] = useState({a: 1, b: 2, c: 3});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>Obj value: A: {obj.a} ; B: {obj.b} ; C: {obj.c}</p> */}
        <p>Counter value: {count}</p>
        <div
          className="App-link"
          // onClick={() => setObj({a: 2})}
          // onClick={() => setObj({...obj, a: 2})}
          onClick={() => setCount(count + 1)}
        >
          Click to +1
        </div>
        {/* <div
          className="App-link"
          onClick={() => setTimeout(()=>alert(count), 5000)} 
        >
          Send to event loop
        </div> */}
      </header>
    </div>
  );
}

export default App;
