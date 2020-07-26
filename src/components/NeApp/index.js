import React, {forwardRef,useState, useEffect} from 'react';
import '../App/index.css';

const NeApp = forwardRef((props, ref) => {
  const {count} = props;
  const [value, setValue] = useState(null);

  useEffect(() => {
    const testRef = ref.current;
    console.log('neApp',ref);
    setValue(testRef.offsetLeft);
    setTimeout(()=> testRef.style.backgroundColor="red", 5000)
  }, [ref, value])

  return (
        <div
          className="App-link"
          onClick={() => {}}
        >
          CurrentOffset&Count: {value}&{count}
        </div>
  );
});

export default NeApp;