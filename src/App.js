import React from 'react';
import NavBar from './Components/NavBar';
import FeatureSection from './Components/FeatureSection';
import './App.css';

function App() {
  return (
    <div className="App bg-slate-600">
      <NavBar></NavBar>
      <FeatureSection />
    </div>
  );
}

export default App;
