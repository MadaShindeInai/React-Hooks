import React from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';
import NeApp from '../NeApp';
import {AppState} from '../context/AppState'

const App = () => {

  return (
    <AppState>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NeApp />
        </header>
      </div>
    </AppState>
  );
} 

export default App;
