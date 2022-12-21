import './App.css';
import React from 'react';
import Header from './Components/Header.js';
import Backgroundvideo from './Components/Backgroundvideo';
import Shedual from './Components/Shedual';
import Scrollbar from './Components/Scrollbar';
import Logoblock from './Components/Logoblock';
import Curriculum from './Components/Curriculum';

function App() {
  return (
    <>
      <Header/>
      <Backgroundvideo/>
      <Shedual/>
      <Scrollbar/>
      <Logoblock/>
      <Curriculum/>
    </>
  );
}

export default App;
