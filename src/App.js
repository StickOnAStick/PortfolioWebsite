import React from 'react';
import NavBar from './Components/NavBar';
import HomeMain from './Components/Home/HomeMain';
import Footer from './Components/Footer';
import ContactMain from './Components/Contact/ContactMain';
import { Routes, Route } from 'react-router-dom';
import './App.css';

//Add an about section below feature section || Re-work feature section; YOU'RE A HARDWARE GIRL LIVIN IN A SOFTWARE WORLD

function App() {
  return (
    <div className="App bg-white flex flex-col h-screen">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomeMain className="flex-grow"/>} />
        <Route path="/Contact" element={<ContactMain className="flex-grow"/>} />
        <Route path="/Projects" element={<ContactMain className="flex-grow"/>} />  {/**These last 3 need to be updated once Projects and Tools used pages are made */}
        <Route path="/Updates" element={<ContactMain className="flex-grow"/>} />
        <Route path="/About" element={<ContactMain className="flex-grow"/>} />
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
