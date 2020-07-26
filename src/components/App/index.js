import React, {useState, useEffect} from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';

const App = () => {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // 1
  // useEffect(() => {
  //   window.addEventListener('click', () => alert(`I am click ${count}`))
  // });

  // 2
  
  // const clickAlert = () =>  alert(`I am click ${count}`);
  // useEffect(() => {
  //   window.addEventListener('click', clickAlert)
  //   return () => window.removeEventListener('click', clickAlert)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);

  // 3
  
  // useEffect(() => {
  //   console.log('hey, i`m count',count);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[count]);

  // 4

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  // componentDidUpdate() {
  //   setTimeout(() => {
  //     console.log(`You clicked ${this.state.count} times`);
  //   }, 3000);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter value: {count}</p>
        {/* <p>Counter2 value: {count2}</p> */}
        <div
          className="App-link"
          onClick={() => setCount(count + 1)}
        >
          Click to +1 count
        </div>
        {/* <div
          className="App-link"
          onClick={() => setCount2(count2 + 1)}
        >
          Click to +1 count2
        </div> */}
      </header>
    </div>
  );
}

export default App;


// function Counter() {
//   // ...

//   useEffect(
//     // Функция эффекта из первого рендера
//     () => {
//       document.title = `You clicked ${0} times`;
//     }
//   );
//   // ...

// }

// // После щелчка наша функция вызывается снова
// function Counter() {
//   // ...

//   useEffect(
//     // Функция эффекта из второго рендера
//     () => {
//       document.title = `You clicked ${1} times`;
//     }
//   );
//   // ...

// }

// // После ещё одного щелчка функция вызывается снова
// function Counter() {
//   // ...

//   useEffect(
//     // Функция эффекта из третьего рендера
//     () => {
//       document.title = `You clicked ${2} times`;
//     }
//   );
//   // ..

// }