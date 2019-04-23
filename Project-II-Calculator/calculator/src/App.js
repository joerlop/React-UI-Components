import React from 'react';
import './App.scss';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {total: 0}
  }

  render() {
    return (
      <div className="main-container">
        <CalculatorDisplay calcProp={this.state}/>
        <ButtonContainer buttonProp={this.state}/>
      </div>)
  };
}

export default App;
