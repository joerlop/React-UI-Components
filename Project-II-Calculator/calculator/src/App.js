import React from 'react';
import './App.scss';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

const App = () => {
  return (
    <div class="main-container">
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;
