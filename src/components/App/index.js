import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/svg/logo.svg";
import NeApp from "../NeApp";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);
  const labelInputRef = useRef(null);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    const clickAlert = () => console.log(`I am click ${count}`);
    const button = buttonRef.current;
    button.addEventListener("click", clickAlert);
    return () => button.removeEventListener("click", clickAlert);
  }, [count]);

  useEffect(() => {
    setTimeout(
      () => (labelInputRef.current.count.style.backgroundColor = "red"),
      5000
    );
    setTimeout(
      () => (labelInputRef.current.label.style.backgroundColor = "blue"),
      5000
    );
  }, []);

  const onCheckChildRefs = () => {
    console.log("labelInputRef.current.count", labelInputRef.current.count); // works
    console.log("labelInputRef.current.label", labelInputRef.current.label); // works
    labelInputRef.current.alwaysBlue();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter value: {count}</p>
        <div
          ref={buttonRef}
          className="App-link"
          onClick={() => setCount(count + 1)}
        >
          Click to +1 count
        </div>
        <NeApp count={count} ref={labelInputRef} buttonRef={buttonRef} />
        <div className="App-link" onClick={onCheckChildRefs}>
          Check refs from child component
        </div>
      </header>
    </div>
  );
};

export default App;
