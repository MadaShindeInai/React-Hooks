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

// Если мы начнем с счетчика, установленного в 0, это будет всего три вызова setCount (1).
// Это связано с тем, что реакт группирует изменения стэйта для оптимизации и применяет их однократно, а значит
//  все три раза мы получим значение count = 0 т.к. перерендер не произошел, а в рамках данного рендера count равен 0.
// const [count, setCount] = useState(0);

// function increment() {
//   setCount(count + 1);
// }

// function handleClick() {
//   increment();
//   increment();
//   increment();
// }

// чтобы исправить это передадим в setCount callback (prev => prev + 1)
//React поместит функции обновления в очередь, а затем запустит их последовательно,
// что приведет к повторному рендерингу с числом, установленным в 3.
// const [count, setCount] = useState(0);

// function increment() {
//   setCount(c => c + 1);
// }

// function handleClick() {
//   increment();
//   increment();
//   increment();
// }


