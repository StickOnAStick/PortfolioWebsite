import React from 'react';
import NavBar from './Components/NavBar';
import HomeMain from './Components/Home/HomeMain';
import Footer from './Components/Footer';

import './App.css';

//Add an about section below feature section || Re-work feature section; YOU'RE A HARDWARE GIRL LIVIN IN A SOFTWARE WORLD

function App() {
  return (
    <div className="App bg-white flex flex-col h-screen">
      <NavBar />
      <HomeMain className="flex-grow"/>
      
      <Footer/>
    </div>
  );
}

export default App;
