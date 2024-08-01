// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeForm from './components/CollegeForm';
import IDCardDisplay from './components/IDCardDisplay';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1 className='heading-top'>College ID Card with QR Code Generator</h1>
        <Routes>
          <Route path="/" element={<CollegeForm />} />
          <Route path="/id-card" element={<IDCardDisplay />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
