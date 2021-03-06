import React from 'react';
import './App.css';

import "./components/HeaderComponents/HeaderContainer";
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
