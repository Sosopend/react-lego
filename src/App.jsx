import React from 'react';
import Header from './components/Header/Header';
import Titanic from './components/Titanic/Titanic';
import MilleniumFalcon from './components/MilleniumFalcon/MilleniumFalcon';
import Footer from './components/Footer/Footer';
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Titanic />
      <MilleniumFalcon />
      <Footer />
    </>
  );
}

export default App;