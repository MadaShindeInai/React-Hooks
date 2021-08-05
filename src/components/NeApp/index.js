import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import "../App/index.css";

const NeApp = ({ count, buttonRef }, ref) => {
  const labelRef = useRef();
  const countRef = useRef();

  useImperativeHandle(ref, () => ({
    get label() {
      return labelRef.current;
    },
    count: countRef.current,
    // ... whatever else one may need
    alwaysBlue: () => {
      const random = Math.random();
      if (random < 0.5) {
        countRef.current.style.backgroundColor = "blue";
        countRef.current.innerText = random;
      } else {
        countRef.current.style.backgroundColor = "red";
        countRef.current.innerText = random;
      }
    },
  }));

  useEffect(() => {
    setTimeout(() => (buttonRef.current.style.backgroundColor = "red"), 2000);
  }, [buttonRef]);

  return (
    <>
      <div className="App-link" ref={labelRef} onClick={() => {}}>
        CurrentCount
      </div>
      <div className="App-link" ref={countRef} onClick={() => {}}>
        {count}
      </div>
    </>
  );
};

export default forwardRef(NeApp);
