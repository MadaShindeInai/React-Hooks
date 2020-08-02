import React, {useState, useRef, useEffect} from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';
import NeApp from '../NeApp';

const App = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div
          className="App-link"
          ref={buttonRef}
          onClick={() => setCount(count + 1)}
        >
          Click to +1 count
        </div>
        <NeApp count={count}/>
      </header>
    </div>
  );
} 

export default App;
