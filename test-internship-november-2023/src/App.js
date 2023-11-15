import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/SIdebar/Sidebar';
import {About} from './pages/AboutUs/About';
import {Home} from './pages/Home/Home';
import { Contact } from './pages/Contacts/Contact';
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar /> 
       <div>
        <Footer/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       </div>
      </div>
    </Router>
  );
}

export default App;
