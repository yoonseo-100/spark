import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import MainTeacher from './components/MainTeacher';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavbar />
      </header>
      <main>
        <h1>Welcome to Spark Edu</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/main-teacher" element={<MainTeacher />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


