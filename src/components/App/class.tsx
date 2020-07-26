import React, {Component} from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './index.css';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {count: 0};
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }

  render () {

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter value: {this.state.count}</p>
        <div
          className="App-link"
          onClick={()=>this.setState({count: this.state.count + 1})}
        >
          Click to +1 count
        </div>
      </header>
    </div>
    );
  }
}

export default App;