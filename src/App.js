import React from 'react';
import NavBar from './Components/NavBar';
import FeatureSection from './Components/FeatureSection';
import Footer from './Components/Footer';

import './App.css';

//Add an about section below feature section || Re-work feature section; YOU'RE A HARDWARE GIRL LIVIN IN A SOFTWARE WORLD

function App() {
  return (
    <div className="App bg-slate-600">
      <NavBar></NavBar>
      <FeatureSection />
      
      <Footer/>
    </div>
  );
}

export default App;
